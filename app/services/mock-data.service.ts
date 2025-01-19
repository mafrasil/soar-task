import { faker } from "@faker-js/faker";
import type { Contact } from "~/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockData = {
  async getTransactions() {
    await delay(500);
    return Array.from({ length: 5 }, () => ({
      id: faker.string.uuid(),
      icon: faker.helpers.arrayElement(["credit-card", "paypal", "dollar"]),
      title: faker.finance.transactionDescription(),
      date: faker.date.recent().toLocaleDateString(),
      amount: faker.number.int({ min: -2000, max: 5000 }),
    }));
  },

  async getContacts(): Promise<Contact[]> {
    await delay(500);
    return Array.from({ length: 4 }, () => ({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
      avatar: faker.image.avatar(),
    }));
  },

  async getCards() {
    await delay(500);
    return Array.from({ length: 3 }, () => ({
      id: faker.string.uuid(),
      balance: faker.number.int({ min: 100, max: 1_250_000 }),
      cardHolder: faker.person.firstName() + " " + faker.person.lastName(),
      validThru: faker.date
        .future()
        .toLocaleDateString("en-US", { month: "2-digit", year: "2-digit" }),
      cardNumber: `${faker.finance.creditCardNumber()}`.replace(/(\d{4})/g, "$1 ").trim(),
      variant: faker.helpers.arrayElement(["dark", "light"]) as "dark" | "light",
    }));
  },

  async getWeeklyActivity() {
    await delay(500);
    return Array.from({ length: 7 }, () => ({
      date: faker.date.recent().toISOString(),
      deposits: faker.number.int({ min: 100, max: 2000 }),
      withdrawals: faker.number.int({ min: -1000, max: -100 }),
    }));
  },

  async getExpenseStatistics() {
    await delay(500);
    return [
      { category: "Entertainment", amount: faker.number.float({ min: 100, max: 1000 }) },
      { category: "Bill Expenses", amount: faker.number.float({ min: 200, max: 1500 }) },
      { category: "Investment", amount: faker.number.float({ min: 500, max: 2000 }) },
      { category: "Others", amount: faker.number.float({ min: 100, max: 800 }) },
    ];
  },

  async getBalanceHistory() {
    await delay(500);
    return Array.from({ length: 7 }, (_, i) => ({
      date: faker.date.recent({ days: (i + 1) * 30 }).toISOString(),
      balance: faker.number.int({ min: 100, max: 1000 }),
    }));
  },
};
