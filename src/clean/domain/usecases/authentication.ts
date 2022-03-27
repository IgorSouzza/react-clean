import { AccountModel } from 'clean/domain/models';

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}
