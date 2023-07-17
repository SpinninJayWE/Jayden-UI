export enum ValidationStatus {
  success = 'Success',
  failure = 'Failure',
  default = 'Default'
}

export type Rule = string | boolean;

export type RulePassInfo = {
  pass: boolean;
  message: string;
};
