"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

//components
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]); //initialize the state with an empty array

  useEffect(() => {
    //fetch for prompts
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await res.json();
      setPrompts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  //creates a function to handle the edit
  const handleEdit = () => {
    console.log("we are editing the prompt");
  };

  //creates a function to handle the delete
  const handleDelete = async () => {};

  return <Profile name="My " desc="Welcome to your personalised profile page" data={prompts} handleEdit={handleEdit} handleDelete={handleDelete} />;
};

export default MyProfile;
