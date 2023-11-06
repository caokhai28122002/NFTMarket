export interface IPayloadUploadImage {
  file: File;
}
export interface IResponsePinata {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  isDuplicate?: boolean;
}

export interface IPayLoadNFTData {
  name: string;
  description: string;
  image: string;
  createdAt: string;
  price: number;
}

export interface IFormNFTData {
  name: string;
  description: string;
  price: number;
}

export interface INFT {
  name: string;
  description: string;
  image: string;
  createdAt: string;
  price: number | string;
  tokenId: number | string;
  seller: string;
  owner: string;
}
