import { HttpPostClient } from 'clean/data/protocols/http/http-post-client';
import { HttpStatusCode } from 'clean/data/protocols/http/http-response';
import { InvalidCredentialsError } from 'clean/domain/errors/invalid-credentials-error';
import { AuthenticationParams } from 'clean/domain/usecases/authentication';

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
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();

      default:
        return Promise.resolve();
    }
  }
}
