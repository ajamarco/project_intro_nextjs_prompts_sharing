"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
//components
import Form from "@components/Form";
import { get } from "mongoose";

const UpdatePrompt = () => {
  //get the router and session
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  //create a state called submitting to manage the form submission. Also, create a state called post to manage the post data
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  //useEffect
  // useEffect(() => {
  //   const getPromptDetails = async () => {
  //     const response = await fetch(`/api/prompt/${promptId}`);
  //     const data = await response.json();

  //     setPost({
  //       prompt: data.prompt,
  //       tag: data.tag,
  //     });
  //   };
  //   if (promptId) getPromptDetails();
  // }, [promptId]);

  //   create a function called createPrompt to handle the form submission
  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("prompt id is missing");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("something happened... ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt} />;
};

export default UpdatePrompt;
