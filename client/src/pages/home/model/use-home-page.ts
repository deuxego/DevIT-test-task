import { batchRequsts, packRequests } from './request.service';
import { REQUESTS_LIMIT } from '../constants';
import { useCallback, useState } from 'react';

type Props = {
  limit: number;
};

export const useHomePage = ({ limit }: Props) => {
  const [listItems, setListItems] = useState<string[]>([]);

  const handleClick = useCallback(async () => {
    try {
      const requests = packRequests(REQUESTS_LIMIT);

      for (let i = 0; i < requests.length; i += limit) {
        const responses = await batchRequsts(requests.slice(i, i + limit));
        const indexes: string[] = [];

        for (const res of responses) {
          if (res.ok) {
            const json = await res.json();
            indexes.push(json.index);
          }
        }

        setListItems((prev) => [...indexes.reverse(), ...prev]);

        console.log(indexes);
      }
    } catch (e) {
      console.error(e);
    }
  }, [limit]);

  return {
    listItems,
    handleClick
  };
};
