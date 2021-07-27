interface IGenerateFileByUrlBlobArgs {
  originalFile: File;
  blobUrl: string;
}

export async function generateFileByUrlBlob({ blobUrl, originalFile }: IGenerateFileByUrlBlobArgs): Promise<File> {
  const blob = await fetch(blobUrl).then(r => r.blob());
  const newFile = new File([blob], originalFile.name, { type: originalFile.type, lastModified: Date.now() });
  return newFile;
}
