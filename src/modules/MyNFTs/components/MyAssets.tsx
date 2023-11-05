import Button from "@/components/Button";
import useNFTs from "@/hooks/useNFTs";
import { FCC } from "@/types";
import { INFT } from "@/apis/types";
import LoadingNFT from "@/modules/NFTs/components/LoadingNFT";
import ActionCard from "@/modules/NFTs/components/ActionCard";
import useMyNFTs from "@/hooks/useMyNFTs";

const MyAssets: FCC = () => {
  const { loading, nfts } = useMyNFTs();

  return (
    <div>
      <div className="h-full w-full flex flex-col items-center py-16 gap-16">
        <div className="flex flex-row w-full justify-between text-white">
          <p className="text-4xl font-bold">My Assets</p>
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E250E5] to-[#4B50E6]">
            EXPLORE MORE
          </p>
        </div>
        <div className="flex flex-row w-full justify-between gap-16 flex-wrap ">
          {loading &&
            Array.from({ length: 8 })
              .fill(0)
              .map((v, i) => <LoadingNFT key={i} />)}
          {!!nfts &&
            nfts.map((v: INFT, i: number) => <ActionCard {...v} key={i} />)}
        </div>
        <Button className="text-lg px-8">Load more</Button>
      </div>
    </div>
  );
};

export default MyAssets;
