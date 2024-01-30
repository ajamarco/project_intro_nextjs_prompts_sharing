"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

//components
import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter(); //import the router
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
  const handleEdit = (prompt) => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };

  //creates a function to handle the delete
  const handleDelete = async (prompt) => {
    //confirm if the user really wants to delete the prompt
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

    if (!hasConfirmed) return;
    try {
      await fetch(`/api/prompt/${prompt._id.toString()}`, {
        method: "DELETE",
      });
      const filteredPrompts = prompts.filter((p) => p._id !== prompt._id);
      setPrompts(filteredPrompts);
    } catch (error) {
      console.log("something happened... ", error);
    }
  };

  return <Profile name="My " desc="Welcome to your personalised profile page" data={prompts} handleEdit={handleEdit} handleDelete={handleDelete} />;
};

export default MyProfile;
