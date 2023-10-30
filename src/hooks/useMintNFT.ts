import { IPayloadUploadImage } from "@/apis/types";
import { uploadImage } from "@/apis/uploads";
import { useMutation } from "react-query";

type Props = IPayloadUploadImage & {};

const useMintNFT = (props: Props) => {
  const { mutate, data ,error} = useMutation(uploadImage);
  return {};
};

export default useMintNFT;
