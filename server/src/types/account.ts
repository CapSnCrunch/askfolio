export interface Account {
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  profileImagePath?: string;
  profileImageUrl?: string;
}

export interface CreateAccountRequest {
  email: string;
  name?: string;
}

export interface UpdateAccountRequest {
  email?: string;
  name?: string;
  profileImagePath?: string;
}

export interface CreateAccountResponse {
  success: boolean;
  account?: Account;
  message: string;
  errors?: Array<{ field: string; message: string }>;
}

export interface GetAccountResponse {
  success: boolean;
  account?: Account;
  message?: string;
}

export interface UpdateAccountResponse {
  success: boolean;
  account?: Account;
  message: string;
  errors?: Array<{ field: string; message: string }>;
}

export interface DeleteAccountResponse {
  success: boolean;
  message: string;
}

export interface ListAccountsResponse {
  success: boolean;
  accounts: Account[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
  message?: string;
}
