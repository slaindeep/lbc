import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const SIZES = [
  { width: 1280, suffix: '1280' },
  { width: 1024, suffix: '1024' },
  { width: 768, suffix: '768' },
  { width: 640, suffix: '640' },
  { width: 320, suffix: '320' }
];

export async function convertToWebp(
  inputPath: string,
  outputDir: string,
  baseName: string
): Promise<string[]> {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    const outputPaths: string[] = [];

    for (const size of SIZES) {
      const outputPath = path.join(outputDir, `${baseName}_${size.suffix}.webp`);
      
      await sharp(inputPath)
        .resize(size.width, null, {
          fit: 'contain',
          withoutEnlargement: true
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      outputPaths.push(outputPath);
    }

    return outputPaths;
  } catch (error) {
    console.error('Error converting image:', error);
    throw error;
  }
}

export async function optimizeImage(
  inputPath: string,
  outputPath: string,
  options = { quality: 80 }
): Promise<void> {
  try {
    await sharp(inputPath)
      .webp(options)
      .toFile(outputPath);
  } catch (error) {
    console.error('Error optimizing image:', error);
    throw error;
  }
}