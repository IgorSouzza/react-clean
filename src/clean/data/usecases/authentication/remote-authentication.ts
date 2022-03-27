import { HttpPostClient } from 'clean/data/protocols/http/http-post-client';
import { HttpStatusCode } from 'clean/data/protocols/http/http-response';
import { AuthenticationParams } from 'clean/domain/usecases/authentication';
import { UnexpectedError } from 'clean/domain/errors/unexpected-error';
import { InvalidCredentialsError } from 'clean/domain/errors/invalid-credentials-error';
export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
