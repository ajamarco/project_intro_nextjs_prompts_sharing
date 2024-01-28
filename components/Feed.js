"use client"; //we should use client rendering, since we are using states and effects

// Desc: Feed component for the home page
import { useState, useEffect } from "react";

//components
import PromptCardList from "./PromptCardList";

const Feed = () => {
  //create a state to manage the search text and another state to manage the list of prompts
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]); //initialize the state with an empty array

  useEffect(() => {
    //fetch for prompts
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPrompts(data);
    };

    fetchPosts();
  }, []);
  //create a function to handle the search text change
  const handleSearchTextChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" placeholder="Search for a tag or username" value={searchText} onChange={handleSearchTextChange} required className="search_input peer" />
      </form>
      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
