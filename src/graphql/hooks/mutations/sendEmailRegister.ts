import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useSendEmailRegister = () => {
  const [sendEmailRegister, { ...options }] = useMutation<
    mutations.SendEmailRegisterPayload,
    mutations.SendEmailRegisterVariables
  >(mutations.SEND_EMAIL_REGISTER);

  return { sendEmailRegister, ...options };
};
