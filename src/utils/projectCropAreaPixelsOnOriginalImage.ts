import { ICropArea } from "@/shared";

type Args = {
  mediaSize: { width: number; height: number };
  croppedAreaPixels: ICropArea;
  angle: number;
};

export const projectCropAreaPixelsOnOriginalImage = ({ mediaSize, croppedAreaPixels, angle }: Args) => {
  if (angle === 90 || angle === 270) {
    const offset = ((mediaSize.width - mediaSize.height) / 2) ^ 0; // round towards zero

    croppedAreaPixels.x -= offset;
    croppedAreaPixels.y += offset;
  }

  const imageW = mediaSize.width;
  const imageH = mediaSize.height;

  const cropAreaX = croppedAreaPixels.x;
  const cropAreaY = croppedAreaPixels.y;

  const cropAreaW = croppedAreaPixels.w;
  const cropAreaH = croppedAreaPixels.h;

  let ax = 0;
  let ay = 0;
  let bx = 0;
  let by = 0;

  if (angle === 0) {
    ax = cropAreaX;
    ay = cropAreaY;

    bx = cropAreaX + cropAreaW - 1;
    by = cropAreaY + cropAreaH - 1;
  } else if (angle === 90) {
    ax = cropAreaY;
    ay = imageH - cropAreaW - cropAreaX;

    bx = cropAreaH + cropAreaY - 1;
    by = imageH - cropAreaX - 1;
  } else if (angle === 180) {
    ax = imageW - cropAreaX - cropAreaW;
    ay = imageH - cropAreaY - cropAreaH;

    bx = imageW - cropAreaX + 1;
    by = imageH - cropAreaY + 1;
  } else if (angle === 270) {
    ax = imageW - cropAreaY - cropAreaH;
    ay = cropAreaX;

    bx = imageW - cropAreaY - 1;
    by = cropAreaW + cropAreaX - 1;
  }

  // rounding is not always predictable and coordinates may exceed the bounds of the image by 1 or 2 px
  ax = Math.max(ax, 0);
  ay = Math.max(ay, 0);
  bx = Math.max(bx, 0);
  by = Math.max(by, 0);
  ax = Math.min(imageW - 1, ax);
  ay = Math.min(imageH - 1, ay);
  bx = Math.min(imageW - 1, bx);
  by = Math.min(imageH - 1, by);

  return { left: ax, top: ay, right: bx, bottom: by };
};

export const fixCroppedAreaPixels = ({ mediaSize, croppedAreaPixels, angle }: Args): ICropArea => {
  if (angle === 90 || angle === 270) {
    const offset = ((mediaSize.width - mediaSize.height) / 2) ^ 0; // round towards zero

    croppedAreaPixels.x -= offset;
    croppedAreaPixels.y += offset;
  }

  return croppedAreaPixels;
};
