export const getOptimizedImageUrl = (src: string): string => {
  if (!src) return '';
  
  // If it's already a webp file, return as is
  if (src.endsWith('.webp')) return src;
  
  // Extract the base path and file name
  const [path, filename] = src.split('/').reduce((acc, part, i, arr) => {
    if (i === arr.length - 1) {
      acc[1] = part;
    } else {
      acc[0] += part + '/';
    }
    return acc;
  }, ['', '']);

  // Remove extension if exists
  const baseName = filename.split('.')[0];
  
  // Return the webp version
  return `${path}${baseName}_1280.webp`;
};

export const getImagePlaceholder = (src: string): string => {
  if (!src) return '';
  
  const [path, filename] = src.split('/').reduce((acc, part, i, arr) => {
    if (i === arr.length - 1) {
      acc[1] = part;
    } else {
      acc[0] += part + '/';
    }
    return acc;
  }, ['', '']);

  const baseName = filename.split('.')[0];
  return `${path}${baseName}_320.webp`;
};

export const generateSrcSet = (src: string, format: 'webp' | 'jpg'): string => {
  if (!src) return '';

  const [path, filename] = src.split('/').reduce((acc, part, i, arr) => {
    if (i === arr.length - 1) {
      acc[1] = part;
    } else {
      acc[0] += part + '/';
    }
    return acc;
  }, ['', '']);

  const baseName = filename.split('.')[0];
  
  if (format === 'webp') {
    return `
      ${path}${baseName}_320.webp 320w,
      ${path}${baseName}_640.webp 640w,
      ${path}${baseName}_768.webp 768w,
      ${path}${baseName}_1024.webp 1024w,
      ${path}${baseName}_1280.webp 1280w
    `.trim();
  }
  
  return `${path}${baseName}.jpg`;
}