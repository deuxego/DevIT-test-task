import { FetchRequestFn } from './types';

export const batchRequsts = (requests: FetchRequestFn[]) => {
  return Promise.all([...requests.map((request) => request())]);
};

export const packRequests = (maxCount: number): FetchRequestFn[] => {
  const requests = [];

  for (let i = 1; i <= maxCount; i++) {
    const request = fetch.bind(null, import.meta.env.VITE_API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index: i })
    });
    requests.push(request);
  }

  return requests;
};
