import { NextPage } from 'next';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

function MyApp({ Component, pageProps }: { Component: NextPage; pageProps: { session: Session; children?: ReactNode } }): JSX.Element {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
