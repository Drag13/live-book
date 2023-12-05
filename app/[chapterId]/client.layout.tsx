'use client';

import { Module } from '../lib/builder/types';
import { BookContextProvider } from './book.context';

export function ClientLayout({
  children,
  module,
}: WithChildren<{ module: Module<string> }>) {
  return <BookContextProvider module={module}>{children}</BookContextProvider>;
}
