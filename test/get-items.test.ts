import { describe, expect, test } from 'vitest';
import { TgtgClient } from '../src';
import nock = require('nock');
import { TgtgConfig } from '../src/lib/config/tgtg-config';
import { requestBodies } from './data/request-bodies';
import { responseBodies } from './data/response-bodies';
import { get, omit, pick } from 'lodash';

describe('getItems', () => {
  test('should throw error because authentication is required', async () => {
    const client = new TgtgClient({ email: 'john@doe.com' });

    await expect(() => client.getItems({})).rejects.toThrowError(
      'Please sign in first with requestLoginByEmail() and authenticate().',
    );
  });

  test('should throw error 422', async () => {
    //@ts-ignore
    nock(TgtgConfig.baseUrl).post(`/${TgtgConfig.items}`, requestBodies.items).reply(422);
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, responseBodies.authenticate);

    const client = new TgtgClient({ email: 'john@doe.com' });
    await client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830');

    await expect(() => client.getItems({})).rejects.toThrowError(
      'There was an error while fetching items: Response code 422 (Unprocessable Entity)',
    );
  });

  test('should throw error because no items were returned', async () => {
    //@ts-ignore
    nock(TgtgConfig.baseUrl).post(`/${TgtgConfig.items}`, requestBodies.items).reply(200, {});
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, responseBodies.authenticate);

    const client = new TgtgClient({ email: 'john@doe.com' });
    await client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830');

    await expect(() => client.getItems({})).rejects.toThrowError(
      'There was an error while fetching items: no items received.',
    );
  });

  test('should return items', async () => {
    //@ts-ignore
    nock(TgtgConfig.baseUrl).post(`/${TgtgConfig.items}`, requestBodies.items).reply(200, responseBodies.items);
    nock(TgtgConfig.baseUrl)
      .post(`/${TgtgConfig.authPolling}`, requestBodies.authenticate)
      .reply(200, responseBodies.authenticate);

    const client = new TgtgClient({ email: 'john@doe.com' });
    await client.authenticate('ff9c113b-1eb4-4f19-b472-46ba31ad7830');

    await expect(client.getItems({})).resolves.toEqual(get(responseBodies.items, 'items'));
  });
});
