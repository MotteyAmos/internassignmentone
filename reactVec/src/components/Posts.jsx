import React from "react";
import Post from "./Post";

const posts = [
  {
    title: "Make a design System from scratch",
    date: "12 Feb 2020",
    tag: "Design, Pattern",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam quae, vero tempore hic explicabo voluptatem fugiat necessitatibus numquam et.",
  },
  {
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    tag: "Figma, Icon Design",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam quae, vero tempore hic explicabo voluptatem fugiat necessitatibus numquam et.",
  },
];

const Posts = () => {
  return (
    <div className="bg-[#deeef5] py-[3rem] ">
      <div class="flex  items-center justify-between mx-[10rem] max-sm:mx-[3rem]">
        <div class="text-[1.5rem] p-[1rem]">Recent Posts</div>
        <a href="#" class="text-blue-800">
          View all
        </a>
      </div>

        <div class="mx-[10rem] max-sm:mx-[3rem] max-sm:gap-[3rem] flex gap-[5rem] max-sm:flex-col-reverse">
        {
        posts.map((post, id) =>{
            return <Post key={id} value={post}/>
            })
        }

        </div>

    </div>
  );
};

export default Posts;
