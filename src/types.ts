// src/types.ts
export interface Transaction {
    id: number;
    amount: number;
    date: string;
    category: string;
    essential: boolean;
    remark: string;
  }
  