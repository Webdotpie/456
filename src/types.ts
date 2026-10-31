export interface AccountInfo {
  id: string;
  name: string;
  type: string;
  accountNumber: string;
  sortCode: string;
  balance: number;
  availableBalance: number;
  currency: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'debit' | 'credit';
  balanceAfter: number;
}
