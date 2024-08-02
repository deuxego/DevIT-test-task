import { useHomePage } from '../model/use-home-page';
import { ChangeEvent, useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { List } from './list';

const HomePage = () => {
  const [limit, setLimit] = useState<number>(10);
  const { isLoading, listItems, handleClick } = useHomePage({ limit });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;

    if (value >= 0 && value <= 100) {
      setLimit(value);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center pt-32 space-y-8">
      <div className="relative flex items-center h-fit w-fit">
        <Input
          value={limit}
          type="number"
          onChange={handleInput}
          className="relative h-12 w-72 pr-16"
        />
        <Button
          disabled={isLoading}
          onClick={handleClick}
          className="absolute top-1/2 right-1 transform -translate-y-1/2"
        >
          Start
        </Button>
      </div>

      <List listItems={listItems} />
    </div>
  );
};

export default HomePage;
