import { rest } from 'msw';
import { MOCK_API_URL, MOCK_API_PATH } from '../api/apiConfig';
import data from './db';

export const handlers = [
  rest.get(`${MOCK_API_URL}${MOCK_API_PATH.SICK}`, (req, res, ctx) => {
    const searchedNoun = req.url.searchParams.get('q');

    // NOTE: query parameter - `q`가 없을 경우 빈 데이터를 반환
    if (!searchedNoun) {
      return res(ctx.status(200), ctx.json({ sick: [] }));
    }

    const filteredData = {
      sick: data.sick.filter(item => {
        return item.sickNm.includes(searchedNoun);
      }),
    };

    return res(ctx.status(200), ctx.json(filteredData));
  }),
];
