export enum ValidationStatus {
  success = 'Success',
  failure = 'Failure',
  default = 'Default'
}

export type Rule = string | boolean;

export type RuleFuncs = ((val?: string | number) => Rule)[] | null;

export type RulePassInfo = {
  pass: boolean;
  message: string;
};
