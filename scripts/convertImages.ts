const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const SIZES = [
  { width: 1280, suffix: '1280' },
  { width: 1024, suffix: '1024' },
  { width: 768, suffix: '768' },
  { width: 640, suffix: '640' },
  { width: 320, suffix: '320' }
];

async function convertToWebp(
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
      console.log(`Created: ${outputPath}`);
    }

    return outputPaths;
  } catch (error) {
    console.error('Error converting image:', error);
    throw error;
  }
}

async function convertImages() {
  const sourceDir = path.join(__dirname, '../src/assets/images/aboutimg');
  const targetDir = path.join(__dirname, '../public/images/services/banners');

  try {
    // Read all PNG files
    const files = await fs.readdir(sourceDir);
    const pngFiles = files.filter((file: string) => file.endsWith('.png'));

    for (const file of pngFiles) {
      const baseName = path.parse(file).name;
      const serviceName = getServiceName(baseName);
      
      const inputPath = path.join(sourceDir, file);
      const outputDir = path.join(targetDir, serviceName);

      console.log(`\nProcessing ${file}...`);
      await convertToWebp(inputPath, outputDir, serviceName);
      console.log(`Successfully converted ${file}`);
    }

    console.log('\nAll images converted successfully!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

function getServiceName(baseName: string): string {
  const numberMap: { [key: string]: string } = {
    '1': 'tax',
    '2': 'tax',
    '3': 'legal',
    '4': 'legal',
    '5': 'formation',
    '6': 'formation',
    '7': 'governance',
    '8': 'governance',
    '9': 'business-admin',
    '10': 'business-admin'
  };

  return numberMap[baseName] || 'default';
}

convertImages();