import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
   interface User {
    /** The user's postal address. */
     id: string;
     name: string;
     email: string;
     image: string;
     mobile?: string;
}
  interface Session {
    user: User
  }
}
