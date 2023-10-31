import { FCC } from "@/types";

type Props = {};

const LiveAuctions: FCC = (props: Props) => {
  return (
    <div>
      <div className="h-full w-full min-h-[calc(100vh-128px)] items-center pt-16">
        <div className="flex flex-row justify-between text-white">
          <p className="text-2xl">Today&rsquo;s Picks</p>
          <p className="">EXPLORE MORE</p>
        </div>
        <div className="flex flex-row w-full justify-between"></div>
      </div>
    </div>
  );
};

export default LiveAuctions;
