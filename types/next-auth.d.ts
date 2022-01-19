import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
   interface User {
    /** The user's postal address. */
  id:            String,
  name:          String,
  email:         String,
  image:         String,
  mobile?:         String,
}
  interface Session {
    user: User
  }
}
