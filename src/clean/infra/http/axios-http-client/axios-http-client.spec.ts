import axios from 'axios';
import { HttpPostParams } from 'clean/data/protocols/http';
import faker from 'faker';

import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<string> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
});

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);

    expect(mockedAxios.post).toHaveBeenLastCalledWith(
      request.url,
      request.body,
    );
  });
});
