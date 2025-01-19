export interface Transaction {
  id: string;
  icon: "credit-card" | "paypal" | "dollar";
  title: string;
  date: string;
  amount: number;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Card {
  id: string;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  variant: "dark" | "light";
}

export interface WeeklyActivity {
  date: string;
  deposits: number;
  withdrawals: number;
}

export interface ExpenseStatistic {
  category: string;
  amount: number;
}
