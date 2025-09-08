import { NotFoundException } from '../exceptions/AppException';
import { firestore } from '../lib/firebase-admin';
import { ImageService } from './image.service';

export interface Account {
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  profileImagePath?: string;
  profileImageUrl?: string;
}

export class AccountService {
  private readonly accountCollection = firestore.collection('accounts');

  constructor(private imageService: ImageService) {}

  /**
   * Creates a new account document in Firestore
   * @param uuid - Firebase Auth UUID to use as document ID
   * @param accountData - The account data to store
   */
  async createAccount(uuid: string, email: string, name?: string, profileImagePath?: string): Promise<void> {
    await this.accountCollection.doc(uuid).set({
      email: email,
      name: name || "Reader",
      createdAt: new Date(),
      updatedAt: new Date(),
      profileImagePath: profileImagePath || ""
    });
  }

  /**
   * Retrieves an account from Firestore by ID
   * @param uuid - The Firebase Auth UUID of the account
   * @returns The account data or null if not found
   */
  async getAccount(uuid: string): Promise<Account> {
    const doc = await this.accountCollection.doc(uuid).get();
    if (!doc.exists) throw new NotFoundException('Account not found');

    const data = doc.data();
    const account = {
      ...data,
      createdAt: data?.createdAt.toDate(),
      updatedAt: data?.updatedAt.toDate()
    } as Account;

    if (account.profileImagePath) {
      account.profileImageUrl = await this.imageService.getThumbnailSignedUrl(account.profileImagePath);
    }

    return account;
  }

  /**
   * Deletes an account document from Firestore
   * @param uuid - The Firebase Auth UUID of the account to delete
   */
  async deleteAccount(uuid: string): Promise<void> {
    await this.accountCollection.doc(uuid).delete();
  }

  /**
   * Updates an account's data in Firestore
   * @param uuid - The Firebase Auth UUID of the account
   * @param accountData - The account data to update
   */
  async updateAccount(uuid: string, accountData: Partial<Account>): Promise<Account> {
    await this.accountCollection.doc(uuid).update({
      ...accountData,
      updatedAt: new Date()
    });
    const updatedDoc = await this.accountCollection.doc(uuid).get();
    const data = updatedDoc.data();
    return {
      ...data,
      createdAt: data?.createdAt.toDate(),
      updatedAt: data?.updatedAt.toDate()
    } as Account;
  }

}
