import { createContext, useContext } from 'react';
import { BookRunner } from '../lib/runner/runner';
import { Module } from '../lib/builder/types';

const BookContext = createContext<BookRunner<string>>(
  null as unknown as BookRunner<string>
);

export function BookContextProvider({
  children,
  module,
}: WithChildren<{ module: Module<string> }>) {
  const bookRunner = new BookRunner(module);
  return (
    <BookContext.Provider value={bookRunner}>{children}</BookContext.Provider>
  );
}

export const useBook = () => useContext(BookContext);
