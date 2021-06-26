import { gql } from "@apollo/client";

export interface SendEmailRegisterVariables {
  email: string;
}

export interface SendEmailRegisterPayload {
  response: string;
}

export const SEND_EMAIL_REGISTER = gql`
  mutation SendEmailRegister($email: String!) {
    sendEmailRegister(email: $email) {
      response
    }
  }
`;
