import { uploadImage, uploadNFTData } from "@/apis/uploads";
import FormWrapper from "@/components/FormWrapper";
import { PINATA_IPFS_URL } from "@/constants";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ChooseImageField from "./ChooseImageField";
import TextArea from "./TextArea";
import TextField from "./TextField";

import { NFTMarketAddress } from "@/constants";
import { useRouter } from "next/router";
import useContract from "@/hooks/useContract";
import useMintNFT from "@/hooks/useMintNFT";

type Props = {};

const MintNFT = (props: Props) => {
  const { createSale } = useMintNFT();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const form = useForm({});

  const onSubmit = async (data: any) => {
    if (!data.name || !data.description || !data.price || !file) {
      toast.error("Please enter full image, name, description and price");
      return;
    }
    try {
      setLoading(true);
      const image = await uploadImage(file);
      const nft = await uploadNFTData({
        name: data.name,
        price: data.price,
        description: data.description,
        createdAt: new Date().toISOString(),
        image: PINATA_IPFS_URL + image.IpfsHash,
      });
      await createSale(PINATA_IPFS_URL + nft.IpfsHash, data.price);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container bg-[#E05BFF10] ring-4 ring-[#E05BFF40] py-6 rounded-xl bg-opacity-50 px-10 my-20">
      <FormWrapper methods={form} onSubmit={onSubmit}>
        <div className="container con max-w-screen-2xl grid grid-cols-12 gap-y-12 lg:gap-12">
          <div className="col-span-12 max-w-full xl:col-span-5">
            <ChooseImageField
              control={form.control}
              name="image"
              onToggle={(file) => {
                setFile(file);
              }}
            />
          </div>
          <div className="col-span-12 xl:col-span-7 flex flex-col gap-3">
            <TextField
              name="name"
              label="NFT Name"
              placeholder="Enter NFT Name"
            />
            <TextArea
              name="description"
              label="Description"
              placeholder="Enter NFT Description"
            />
            <TextField
              name="price"
              label="Price"
              type="number"
              placeholder="10 ETH"
            />
            <button
              disabled={loading}
              type="submit"
              className="flex disabled:bg-gray-400 w-full h-[50px] justify-center items-center border rounded-full text-white hover:bg-[#E05BFF40] hover:ring-2 hover:ring-white"
            >
              Mint and Sale Now
            </button>
          </div>
        </div>
      </FormWrapper>
    </div>
  );
};

export default MintNFT;
