import { PINATA_API_KEY, PINATA_SECRET_API_KEY } from "@/constants";
import request from "./axios";
import { IPayLoadNFTData, IResponsePinata } from "./types";
import { v4 as uuidv4 } from "uuid";

export const uploadImage = (file: File): Promise<IResponsePinata> => {
  const formData = new FormData();
  formData.append("file", file);
  return request.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS",
    formData,
    {
      headers: {
        "Content-Type": `multipart/form-data`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    }
  );
};

export const uploadNFTData = (data: IPayLoadNFTData) :Promise<IResponsePinata>=> {
  return request.post(
    "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    {
      pinataMetadata: {
        name: uuidv4(),
      },
      pinataContent: data,
    },
    {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    }
  );
};
