import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

async function compressImages() {
    console.log('Starting image compression to WebP...');
    const files = fs.readdirSync(publicDir);

    for (const file of files) {
        if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg')) {
            const inputPath = path.join(publicDir, file);
            const fileNameWithoutExt = path.parse(file).name;
            const outputPath = path.join(publicDir, `${fileNameWithoutExt}.webp`);

            console.log(`Compressing ${file}...`);
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            // Delete original file to save space
            fs.unlinkSync(inputPath);
            console.log(`Created ${fileNameWithoutExt}.webp and removed original.`);
        }
    }
    console.log('Image compression complete!');
}

compressImages().catch(console.error);
