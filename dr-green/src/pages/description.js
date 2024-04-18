import * as React from "react";

function DescriptionText() {
  return (
    <div className="flex flex-col items-start pt-14 pr-20 pb-20 pl-4 w-full bg-zinc-100">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/11ad78a55c6a5d8bb166ae5fc02a5a9190602a36d3caa09ba577b18cfc5c7a88?apiKey=794147efbee346a29391c6aac61a7c2f&" alt="" className="w-6 aspect-square" />
      <p className="mt-8">Description</p>
      <div className="shrink-0 mt-5 mb-96 h-5 bg-black border-2 border-black border-solid w-[104px]" />
    </div>
  );
}

function Description() {
  return (
    <div className="flex flex-col justify-center text-xl leading-6 whitespace-nowrap bg-white rounded-2xl border-4 border-solid border-zinc-900 max-w-[360px] text-zinc-900">
      <DescriptionText />
    </div>
  );
}

export default Description;