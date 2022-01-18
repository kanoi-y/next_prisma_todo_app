
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

type User = {
  name: string;
  email: string;
  image: string;
}

export default function about({ user }: { user: User }) {
  return <h1>{user.name}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}
