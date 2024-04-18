import * as React from "react";

function Description() {
  return (
    <div className="flex flex-col items-start pt-14 pr-20 pb-20 pl-4 w-full bg-zinc-100 min-h-screen">
      <h1 className="text-3xl">Description</h1>
      <textarea class="textarea textarea-ghost" placeholder="Enter Description for the plant..."></textarea>
    </div>
  );
}


export default Description;