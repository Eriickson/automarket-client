export interface IGetCroppedImg {
  src: string;
  pixelCrop: ICroppedAreaPixels;
  rotation?: number;
}
export interface IFile {
  file: File;
  src: string;
}
export interface ICroppedAreaPixels {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface IFileAccepted {
  id: string;
  croppedArea: ICroppedAreaPixels;
  src: string;
  croppedImageSrc: string;
  file: File;
  rotation?: number;
}

export interface IFlip {
  vertical: boolean;
  horizontal: boolean;
}

export type AspectRatioType = "16:9" | "4:3" | "1:1";