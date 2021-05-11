export function hasFiles(data) {
  return data instanceof File
    || data instanceof Blob
    || data instanceof FileList
    || (typeof data === 'object' && data !== null && Object.values(data).find(value => hasFiles(value)) !== undefined)
    || data instanceof FormData && Array.from(data.values()).some(value => hasFiles(value))
}
