import { ReactNode } from 'react';

type Props<T> = {
  listItems: T[];
};

export const List = <T extends ReactNode>({ listItems }: Props<T>) => {
  return (
    <div className="flex flex-col space-y-2 h-5/6 overflow-y-scroll">
      {listItems.map((index, idx) => (
        <div
          className="w-72 px-4 py-2 text-xl bg-gray-400 text-center rounded-md"
          key={idx}
        >
          {index}
        </div>
      ))}
    </div>
  );
};
