"use client";
import Link from "next/link"; //this allows us to link to other pages in our app
import Image from "next/image"; //this allows us to use images in our app
import { useState, useEffect } from "react"; //this allows us to use state in our app
import { signIn, signOut, useSession, getProviders } from "next-auth/react"; //this allows us to use next-auth in our app

const Nav = () => {
  const isUserLoggedIn = true;

  //create a function to display the page if the user is logged in
  const userIsLogged = () => {
    return (
      <div className="flex gap-3 md:gap-5">
        <Link href="/create-prompt" className="black_btn">
          Create Post
        </Link>
        <button type="button" className="outline_btn" onClick={signOut}>
          Sign Out
        </button>
        <Link href="/profile" className="flex gap-2 flex-center">
          <Image src={"/assets/images/logo.svg"} width={30} height={30} className="rounded-full" alt="Profile Icon" />
        </Link>
      </div>
    );
  };

  //create a function to display the page if the user is not logged in
  const userIsNotLogged = () => {
    return <div>user is NOT logged</div>;
  };

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={"/assets/images/logo.svg"} alt="Promptland Logo" width={30} height={30} className="object-contain" />
        <p className="logo_text">Promptland</p>
      </Link>

      {/* DESKTOP navigation */}
      {/* sm:flex hidden means that this will be hidden on mobiles */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? userIsLogged() : userIsNotLogged()} {/* if the user is logged in, display the userIsLogged function, if not, display the userIsNotLogged function */}
      </div>
    </nav>
  );
};

export default Nav;
