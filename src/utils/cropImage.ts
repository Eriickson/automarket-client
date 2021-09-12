import { GetCroppedImg } from "@/shared";

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", error => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}

interface getCroppedImgReturn {
  blobUrl: string;
  base64Url: string;
}

export async function getCroppedImg({
  src,
  rotation = 0,
  cropArea,
  flip = { h: false, v: false },
}: GetCroppedImg): Promise<getCroppedImgReturn> {
  const image = await createImage(src);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return { base64Url: "", blobUrl: "" };
  }
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvas.width = safeArea;
  canvas.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.scale(flip.h ? -1 : 1, flip.v ? -1 : 1);
  ctx.translate(-safeArea / 2, -safeArea / 2);

  // draw rotated image and store data.
  ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = cropArea.w;
  canvas.height = cropArea.h;

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    0 - safeArea / 2 + image.width * 0.5 - cropArea.x,
    0 - safeArea / 2 + image.height * 0.5 - cropArea.y,
    // Math.round(0 - safeArea / 2 + image.width * 0.5 - cropArea.x),
    // Math.round(0 - safeArea / 2 + image.height * 0.5 - cropArea.y),
  );
  // As Base64 string
  const base64Url = canvas.toDataURL("image/jpeg");

  // As a blob
  const blobUrl = new Promise<string>(resolve => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file));
    }, "image/jpeg");
  });

  const blobUrlCreated = await blobUrl;

  return { base64Url, blobUrl: blobUrlCreated };
}
