export interface IGetCroppedImg {
  src: string;
  pixelCrop: ISelectedImageArea;
  rotation?: number;
}
export interface ISelectedImageArea {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface IFileAccepted {
  id: string;
  croppedArea: ISelectedImageArea;
  src: string;
  croppedImageSrc: string;
  file: File;
  rotation?: number;
  isCover?: boolean;
}
