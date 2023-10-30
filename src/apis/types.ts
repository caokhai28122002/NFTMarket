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
