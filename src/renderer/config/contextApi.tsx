import { PropsWithChildren } from 'react';
import { CommonCtxProvider } from './commonCtxProvider';

export default function ContextAPI({ children }: Readonly<PropsWithChildren>) {
  return <CommonCtxProvider>{children}</CommonCtxProvider>;
}
