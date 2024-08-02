import { batchRequsts, packRequests } from './request.service';
import { REQUESTS_LIMIT } from '../constants';
import { useCallback, useState } from 'react';

type Props = {
  limit: number;
};

export const useHomePage = ({ limit }: Props) => {
  const [listItems, setListItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  return {
    isLoading,
    listItems,
    handleClick
  };
};
