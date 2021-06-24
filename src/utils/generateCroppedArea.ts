import { ISelectedImageArea } from "@/shared";

/**
 * @url - Source of the image to use
 * @aspectRatio - The aspect ratio to apply
 */
export function generateCroppedArea(url: string, aspectRatio: number = 4 / 3): Promise<ISelectedImageArea> {
  return new Promise(resolve => {
    // this image will hold our source image data
    const inputImage = new Image();

    // we want to wait for our image to load
    inputImage.onload = () => {
      // let's store the width and height of our image
      const inputWidth = inputImage.naturalWidth;
      const inputHeight = inputImage.naturalHeight;

      // get the aspect ratio of the input image
      const inputImageAspectRatio = inputWidth / inputHeight;

      // if it's bigger than our target aspect ratio
      let outputWidth = inputWidth;
      let outputHeight = inputHeight;
      if (inputImageAspectRatio > aspectRatio) {
        outputWidth = inputHeight * aspectRatio;
      } else if (inputImageAspectRatio < aspectRatio) {
        outputHeight = inputWidth / aspectRatio;
      }

      // calculate the position to draw the image at
      const outputX = (outputWidth - inputWidth) * 0.5;
      const outputY = (outputHeight - inputHeight) * 0.5;

      const response = {
        w: outputWidth,
        h: outputHeight,
        x: Math.abs(outputX),
        y: Math.abs(outputY),
      };
      resolve(response);
    };

    // start loading our image
    inputImage.src = url;
  });
}
