export interface IErrorForm {
  message: string;
  type: string;
}
export interface IWizardStep {
  label: string;
  title: string;
  desc: string;
  Icon: React.ReactElement;
  Component: React.ReactElement;
  nameForm: string;
  nextStep?: () => void;
}
