import { RemoteAuthentication } from './remote-authentication';
import { HttpClientSpy } from 'clean/data/test/mock-http-client';

describe('RemoteAuthentication', () => {
  it('should call HttpClient with correct URL', async () => {
    const url = 'any_url';
    const httpPostClientSpy = new HttpClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  });
});
