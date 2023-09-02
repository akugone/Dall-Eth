"use client";

import Card from "@/components/Card";
import { useState, useEffect } from "react";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map(post => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [allPosts, setAllPosts] = useState<string[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/cloud/new", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Write your prompts <br className="max-md:hidden" />
        <span className="orange_gradient text-center">And get your pics</span>
      </h1>
      <p className="desc text-center">Ai pics generator</p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
        <RenderCards data={allPosts} title="No Posts Yet" />
      </div>

      <div className="mt-10"></div>
    </section>
  );
};

export default Home;
