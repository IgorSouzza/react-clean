import faker from 'faker';

import { AccountModel } from 'clean/domain/models';
import { AuthenticationParams } from 'clean/domain/usecases';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});
