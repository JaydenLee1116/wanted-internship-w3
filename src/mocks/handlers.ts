import { rest } from 'msw';
import { MOCK_API_URL, MOCK_API_PATH } from '../api/apiConfig';
import data from './db';

export const handlers = [
  rest.get(`${MOCK_API_URL}${MOCK_API_PATH.SICK}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
