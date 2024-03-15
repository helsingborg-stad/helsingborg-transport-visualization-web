export const downloadBlobAsFile = (blob: Blob, filename: string): void => {
  const objectUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.setAttribute('download', filename);
  link.click();
  setTimeout(() => window.URL.revokeObjectURL(objectUrl), 0);
};
