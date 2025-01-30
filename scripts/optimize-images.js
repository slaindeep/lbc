import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [320, 640, 768, 1024, 1280];
const formats = ['webp', 'jpg'];
const quality = {
  jpg: 80,
  webp: 75
};

async function processImage(inputPath, format, size) {
  try {
    const dir = path.dirname(inputPath);
    const filename = path.basename(inputPath, path.extname(inputPath));
    const outputPath = path.join(dir, `${filename}_${size}.${format}`);

    await sharp(inputPath)
      .resize(size, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      [format]({
        quality: format === 'webp' ? quality.webp : quality.jpg
      })
      .toFile(outputPath);

    console.log(`Created: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
    return null;
  }
}

async function generateBlurHash(inputPath) {
  try {
    const { info, data } = await sharp(inputPath)
      .resize(32, 32, { fit: 'inside' })
      .toBuffer({ resolveWithObject: true });

    return {
      width: info.width,
      height: info.height,
      base64: `data:image/${info.format};base64,${data.toString('base64')}`
    };
  } catch (error) {
    console.error(`Error generating blur hash for ${inputPath}:`, error);
    return null;
  }
}

async function optimizeImages() {
  const imageDir = path.join(__dirname, '../public/images');
  
  try {
    // Recursively get all image files
    const getImageFiles = async (dir) => {
      const items = await fs.readdir(dir, { withFileTypes: true });
      let files = [];
      
      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
          files = files.concat(await getImageFiles(fullPath));
        } else if (/\.(jpg|jpeg|png)$/i.test(item.name)) {
          files.push(fullPath);
        }
      }
      
      return files;
    };

    console.log('Scanning for images...');
    const imageFiles = await getImageFiles(imageDir);
    console.log(`Found ${imageFiles.length} images to process`);

    const manifest = {};

    // Process each image
    for (const file of imageFiles) {
      const filename = path.basename(file);
      const versions = [];
      const blurHash = await generateBlurHash(file);

      for (const format of formats) {
        for (const size of sizes) {
          const outputPath = await processImage(file, format, size);
          if (outputPath) {
            versions.push({
              size,
              format,
              path: path.relative(path.join(__dirname, '..'), outputPath).replace(/\\/g, '/')
            });
          }
        }
      }

      manifest[filename] = {
        original: path.relative(path.join(__dirname, '..'), file).replace(/\\/g, '/'),
        placeholder: blurHash,
        versions
      };
    }

    // Create utils directory if it doesn't exist
    const utilsDir = path.join(__dirname, '../src/utils');
    await fs.mkdir(utilsDir, { recursive: true });

    // Write manifest
    await fs.writeFile(
      path.join(utilsDir, 'imageManifest.json'),
      JSON.stringify(manifest, null, 2)
    );
    
    console.log('Image optimization complete! Image manifest generated.');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();