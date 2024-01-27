"use client";

import { SessionProvider } from "next-auth/react";

//the Provider component that will be used in the layout.js file
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
