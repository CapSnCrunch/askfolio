import admin from 'firebase-admin';
import logger from './logger';

if (!admin.apps.length) {
  try {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
    
    if (!projectId || !storageBucket) {
      throw new Error('Missing required Firebase environment variables: FIREBASE_PROJECT_ID and FIREBASE_STORAGE_BUCKET');
    }

    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      projectId,
      storageBucket
    });
    logger.info("✅ Firebase initialized (ADC)");
  } catch (e) {
    logger.error({ err: e, stack: (e as Error).stack }, 'Firebase admin initialization error');
    process.exit(1);
  }
}

export const firestore = admin.firestore();
export const auth = admin.auth();
export default admin;
