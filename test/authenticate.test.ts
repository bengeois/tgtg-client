import { describe, expect, test } from 'vitest';
import { TgtgClient } from '../src';
import nock = require('nock');
import { TgtgConfig } from '../src/lib/config/tgtg-config';
import { requestBodies } from './data/request-bodies';
import { responseBodies } from './data/response-bodies';
import { get, omit, pick } from 'lodash';

describe('authenticate', () => {
  test('should throw error (422) during authenticate request', async () => {
    nock(TgtgConfig.baseUrl).post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate).reply(422);

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830')).rejects.toThrowError(
      'There was an error during authentification: Response code 422 (Unprocessable Entity)',
    );
  });

  test('should throw error because no access_token found during authentication request', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, omit(responseBodies.authenticate, 'access_token'));

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830')).rejects.toThrowError(
      'There was an error during authentification, no access_token, refresh_token, access_token_ttl_seconds or user_id received.',
    );
  });

  test('should throw error because no refresh_token found during authentication request', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, omit(responseBodies.authenticate, 'refresh_token'));

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830')).rejects.toThrowError(
      'There was an error during authentification, no access_token, refresh_token, access_token_ttl_seconds or user_id received.',
    );
  });

  test('should throw error because no access_token_ttl_seconds found during authentication request', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, omit(responseBodies.authenticate, 'access_token_ttl_seconds'));

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830')).rejects.toThrowError(
      'There was an error during authentification, no access_token, refresh_token, access_token_ttl_seconds or user_id received.',
    );
  });

  test('should throw error because no user_id found during authentication request', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, omit(responseBodies.authenticate, 'startup_data.user.user_id'));

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830')).rejects.toThrowError(
      'There was an error during authentification, no access_token, refresh_token, access_token_ttl_seconds or user_id received.',
    );
  });

  test('should authenticate successfully', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, responseBodies.authenticate);

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830')).resolves.toBe(undefined);
  });

  test('should return credentials successfully', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, responseBodies.authenticate);

    const client = new TgtgClient({ email: 'john@doe.com' });

    await client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830');

    expect(client.getCredentials()).toStrictEqual({
      accessToken: get(responseBodies.authenticate, 'access_token'),
      refreshToken: get(responseBodies.authenticate, 'refresh_token'),
      accessTokenTtl: get(responseBodies.authenticate, 'access_token_ttl_seconds'),
      userId: get(responseBodies.authenticate, 'startup_data.user.user_id'),
    });
  });

  test('should set credentials successfully', async () => {
    const client = new TgtgClient({ email: 'john@doe.com' });

    client.setCredentials(
      get(responseBodies.authenticate, 'access_token'),
      get(responseBodies.authenticate, 'refresh_token'),
      get(responseBodies.authenticate, 'startup_data.user.user_id'),
      get(responseBodies.authenticate, 'access_token_ttl_seconds'),
    );

    expect(client.getCredentials()).toStrictEqual({
      accessToken: get(responseBodies.authenticate, 'access_token'),
      refreshToken: get(responseBodies.authenticate, 'refresh_token'),
      accessTokenTtl: get(responseBodies.authenticate, 'access_token_ttl_seconds'),
      userId: get(responseBodies.authenticate, 'startup_data.user.user_id'),
    });
  });
});
