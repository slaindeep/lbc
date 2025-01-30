const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../src/assets/images/aboutimg');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/optimized');

// Ensure output directory exists
async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

// Optimize images
async function optimizeImages() {
  try {
    await ensureDir(OUTPUT_DIR);
    
    const files = await fs.readdir(IMAGES_DIR);
    
    for (const file of files) {
      if (!['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) continue;
      
      const inputPath = path.join(IMAGES_DIR, file);
      const outputName = `${path.parse(file).name}.webp`;
      const outputPath = path.join(OUTPUT_DIR, outputName);
      
      // Create WebP version
      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize({
          width: 1920,
          height: 1080,
          fit: 'inside',
          withoutEnlargement: true
        })
        .toFile(outputPath);
      
      // Create a smaller version for mobile
      const mobileOutputPath = path.join(OUTPUT_DIR, `${path.parse(file).name}-mobile.webp`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize({
          width: 768,
          height: 432,
          fit: 'inside',
          withoutEnlargement: true
        })
        .toFile(mobileOutputPath);
      
      console.log(`Optimized: ${file} -> ${outputName}`);
    }
    
    console.log('Image optimization complete!');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();