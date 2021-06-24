import Compressor from "compressorjs";

export function compressImage(file: File): Promise<File> {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.7,
      maxWidth: 2000,
      success(result: File) {
        resolve(result);
      },
      error(err) {
        reject(err);
      },
    });
  });
}
