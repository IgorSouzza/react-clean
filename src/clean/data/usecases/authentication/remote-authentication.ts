import { AccountModel } from 'clean/domain/models';
import { HttpPostClient, HttpStatusCode } from 'clean/data/protocols/http';
import { Authentication, AuthenticationParams } from 'clean/domain/usecases';
import { UnexpectedError, InvalidCredentialsError } from 'clean/domain/errors';

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
