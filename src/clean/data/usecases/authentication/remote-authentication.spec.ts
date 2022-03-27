import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClient } from 'clean/data/protocols/http/http-post-client';

describe('RemoteAuthentication', () => {
  it('should call HttpClient with correct URL', async () => {
    class HttpClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }

    const url = 'any_url';
    const httpPostClientSpy = new HttpClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});

export {};