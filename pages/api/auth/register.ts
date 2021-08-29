import { NextIronHandler, withSession } from "@/auth";
import gql from "graphql-tag";
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import uploadLink from "src/graphql/apollo/uploadLink";
import errorLink from "src/graphql/apollo/errorLink";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, uploadLink]),
});

const REGISTER_USER_M = gql`
  mutation RegisterUser($registerUserInput: RegisterUserInput!) {
    registerUser(input: $registerUserInput) {
      accessToken
      refreshToken
      response
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation ($uploadFile: Upload!) {
    uploadFile(file: $uploadFile)
  }
`;

const registerUser: NextIronHandler = async (req, res) => {
  try {
    const { data } = await client.mutate({
      mutation: UPLOAD_FILE,
      variables: { uploadFile: req.body.profilePicture.originalFile },
    });
    console.log(data);

    console.log("Recibido");
  } catch (err) {
    console.log(err);
  }

  res.send("Recibido");
};

export default withSession(registerUser, { cookieName: "tokens", password: "zVS3LKd3Ajxu9qmFssSYamYhG8uwQKnCYnQ2" });
