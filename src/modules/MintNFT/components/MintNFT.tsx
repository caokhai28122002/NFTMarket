import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ChooseImageField from "./ChooseImageField";
import FormWrapper from "@/components/FormWrapper";
import TextField from "./TextField";
import TextArea from "./TextArea";

type Props = {};

const MintNFT = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const form = useForm({});
  return (
    <div className="container bg-[#E05BFF10] ring-4 ring-[#E05BFF40] py-6 rounded-xl bg-opacity-50 px-10 my-20">
      <FormWrapper
        methods={form}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
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
            <TextField name="price" label="Price" type="number" placeholder="10 ETH"/>
            <button
              type="submit"
              className="flex w-full h-[50px] justify-center items-center border rounded-full text-white hover:bg-[#E05BFF40] hover:ring-2 hover:ring-white"
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
