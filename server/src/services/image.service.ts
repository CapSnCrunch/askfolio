import { Storage } from '@google-cloud/storage';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';

export class ImageService {
  private storage: Storage;
  private bucketName: string;

  constructor() {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    if (!projectId) {
      throw new Error('FIREBASE_PROJECT_ID environment variable is required');
    }
    
    this.storage = new Storage({
      projectId,
    });
    this.bucketName = process.env.STORAGE_BUCKET || `${projectId}.appspot.com`;
  }

  /**
   * Uploads a profile image to Cloud Storage
   * @param imageBuffer - The image buffer
   * @param mimetype - The MIME type of the image
   * @param userId - The user ID for organizing files
   * @returns The path to the uploaded image
   */
  async uploadProfileImage(imageBuffer: Buffer, mimetype: string, userId: string): Promise<string> {
    // Validate image type
    if (!mimetype.startsWith('image/')) {
      throw new Error('File must be an image');
    }

    // Process image with sharp to resize and optimize
    const processedImage = await sharp(imageBuffer)
      .resize(400, 400, { 
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85 })
      .toBuffer();

    // Generate unique filename
    const filename = `profile-images/${userId}/${uuidv4()}.jpg`;
    
    // Upload to Cloud Storage
    const file = this.storage.bucket(this.bucketName).file(filename);
    
    await file.save(processedImage, {
      metadata: {
        contentType: 'image/jpeg',
        metadata: {
          userId: userId,
          uploadedAt: new Date().toISOString(),
        }
      }
    });

    return filename;
  }

  /**
   * Gets a signed URL for a thumbnail image
   * @param imagePath - The path to the image in storage
   * @returns A signed URL for accessing the image
   */
  async getThumbnailSignedUrl(imagePath: string): Promise<string> {
    if (!imagePath) {
      return '';
    }

    try {
      const file = this.storage.bucket(this.bucketName).file(imagePath);
      
      const [url] = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      });

      return url;
    } catch (error) {
      console.error('Error generating signed URL:', error);
      return '';
    }
  }

  /**
   * Deletes an image from Cloud Storage
   * @param imagePath - The path to the image in storage
   */
  async deleteImage(imagePath: string): Promise<void> {
    if (!imagePath) {
      return;
    }

    try {
      const file = this.storage.bucket(this.bucketName).file(imagePath);
      await file.delete();
    } catch (error) {
      console.error('Error deleting image:', error);
      // Don't throw error for deletion failures as it's not critical
    }
  }
}
