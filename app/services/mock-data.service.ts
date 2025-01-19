import { faker } from "@faker-js/faker";
import type { Contact } from "~/types";

export const mockData = {
  async getTransactions() {
    return Array.from({ length: 5 }, () => ({
      id: faker.string.uuid(),
      icon: faker.helpers.arrayElement(["credit-card", "paypal", "dollar"]),
      title: faker.finance.transactionDescription(),
      date: faker.date.recent().toLocaleDateString(),
      amount: faker.number.int({ min: -2000, max: 5000 }),
    }));
  },

  async getContacts(): Promise<Contact[]> {
    return [
      {
        id: "1",
        name: "Austin Distel",
        role: "CEO",
        avatar: "/photos/austin-distel-7bMdiIqz_J4-unsplash.png",
      },
      {
        id: "2",
        name: "Emanuel Minca",
        role: "Director",
        avatar: "/photos/emanuel-minca-jYv069cQuB8-unsplash.png",
      },
      {
        id: "3",
        name: "Marcel Strauss",
        role: "Designer",
        avatar: "/photos/marcel-strauss-Uc_tOqa_jDY-unsplash.png",
      },
      {
        id: "4",
        name: "Julia Volk",
        role: "Developer",
        avatar: "/photos/pexels-julia-volk-5273755.png",
      },
    ];
  },

  async getCards() {
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
    return Array.from({ length: 7 }, () => ({
      date: faker.date.recent().toISOString(),
      deposits: faker.number.int({ min: 100, max: 2000 }),
      withdrawals: faker.number.int({ min: -1000, max: -100 }),
    }));
  },

  async getExpenseStatistics() {
    return [
      { category: "Entertainment", amount: faker.number.float({ min: 100, max: 200 }) },
      { category: "Bill Expenses", amount: faker.number.float({ min: 100, max: 200 }) },
      { category: "Investment", amount: faker.number.float({ min: 100, max: 200 }) },
      { category: "Others", amount: faker.number.float({ min: 100, max: 200 }) },
    ];
  },

  async getBalanceHistory() {
    return Array.from({ length: 7 }, (_, i) => ({
      date: faker.date.recent({ days: (i + 1) * 30 }).toISOString(),
      balance: faker.number.int({ min: 100, max: 1000 }),
    }));
  },
};
