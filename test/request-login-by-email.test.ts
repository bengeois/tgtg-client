import { describe, expect, test } from 'vitest';
import { TgtgClient } from '../src';
import nock = require('nock');
import { TgtgConfig } from '../src/lib/config/tgtg-config';
import { requestBodies } from './data/request-bodies';
import { responseBodies } from './data/response-bodies';
import { omit } from 'lodash';

describe('requestLoginByEmail', () => {
  test('should throw error because email is missing', async () => {
    const client = new TgtgClient({});

    await expect(() => client.requestLoginByEmail()).rejects.toThrowError('You must provide an email.');
  });

  test('should throw error (422) during requestLoginByEmail request', async () => {
    nock(TgtgConfig.baseUrl).post(`/${TgtgConfig.authByEmail}`, requestBodies.authByEmail).reply(422);

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.requestLoginByEmail()).rejects.toThrowError(
      'There was an error during authentification request: Response code 422 (Unprocessable Entity)',
    );
  });

  test('should throw error because no polling_id found during requestLoginByEmail request', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authByEmail}`, requestBodies.authByEmail)
      .reply(200, omit(responseBodies.authByEmail, 'polling_id'));

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.requestLoginByEmail()).rejects.toThrowError(
      'There was an error during authentification request: no polling_id received.',
    );
  });

  test('should return a polling_id', async () => {
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authByEmail}`, requestBodies.authByEmail)
      .reply(200, responseBodies.authByEmail);

    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(client.requestLoginByEmail()).resolves.toBe('ff9c113b-1eb4-4f19-b472-46ba31ad7830');
  });
});
