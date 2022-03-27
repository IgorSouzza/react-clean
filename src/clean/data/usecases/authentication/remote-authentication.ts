import { HttpPostClient } from 'clean/data/protocols/http/http-post-client';
import { HttpStatusCode } from 'clean/data/protocols/http/http-response';
import {
  Authentication,
  AuthenticationParams,
} from 'clean/domain/usecases/authentication';
import { UnexpectedError } from 'clean/domain/errors/unexpected-error';
import { InvalidCredentialsError } from 'clean/domain/errors/invalid-credentials-error';
import { AccountModel } from 'clean/domain/models/account-model';
export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >,
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
