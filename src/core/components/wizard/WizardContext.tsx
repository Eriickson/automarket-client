import React, { createContext, useState, FC, useContext } from "react";
import { IWizardStep } from "./types";

interface IWizardContext {
  currentStep: number;
  stepList: IWizardStep[];
  stepListLenght: number;
  nextStep(): void;
  prevStep(): void;
  addStepList(steList: IWizardStep[]): void;
}
const WizardContext = createContext<IWizardContext | null>(null) as React.Context<IWizardContext>;

const WizardProvider: FC = ({ children }) => {
  const [stepList, setStepList] = useState<IWizardStep[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [stepListLenght, setStepListLenght] = useState(0);

  function nextStep() {
    currentStep !== stepListLenght - 1 && setCurrentStep(currentStep + 1);
  }

  function prevStep() {
    currentStep !== 0 && setCurrentStep(currentStep - 1);
  }

  function addStepList(stepList: IWizardStep[]) {
    setStepListLenght(stepList.length);
    setStepList(stepList);
  }

  return (
    <WizardContext.Provider value={{ currentStep, stepList, stepListLenght, nextStep, prevStep, addStepList }}>
      {children}
    </WizardContext.Provider>
  );
};

const useWizard = (): IWizardContext => useContext<IWizardContext>(WizardContext);

export { WizardProvider, useWizard };
