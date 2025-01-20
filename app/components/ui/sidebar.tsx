import { Link, useLocation } from "react-router";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

import Receipt from "~icons/material-symbols/receipt";
import Person from "~icons/material-symbols/person";
import TrendingUp from "~icons/material-symbols/trending-up";
import CreditCard from "~icons/material-symbols/credit-card";
import AccountBalanceWallet from "~icons/material-symbols/account-balance-wallet";
import Build from "~icons/material-symbols/build";
import Lightbulb from "~icons/material-symbols/lightbulb";
import Settings from "~icons/material-symbols/settings";

import Home from "~icons/mingcute/home-3-fill";
import TaskFill from "~icons/mingcute/task-fill";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: () => <Home />,
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: () => <Receipt />,
  },
  {
    name: "Accounts",
    href: "/accounts",
    icon: () => <Person />,
  },
  {
    name: "Investments",
    href: "/investments",
    icon: () => <TrendingUp />,
  },
  {
    name: "Credit Cards",
    href: "/credit-cards",
    icon: () => <CreditCard />,
  },
  {
    name: "Loans",
    href: "/loans",
    icon: () => <AccountBalanceWallet />,
  },
  {
    name: "Services",
    href: "/services",
    icon: () => <Build />,
  },
  {
    name: "My Privileges",
    href: "/privileges",
    icon: () => <Lightbulb />,
  },
  {
    name: "Setting",
    href: "/settings",
    icon: () => <Settings />,
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 2xl:hidden" onClick={onClose} />
      )}

      <div
        className={cn(
          `fixed top-0 flex h-screen w-64 flex-col border-r border-gray-200 bg-white z-50 transition-transform
          duration-300`,
          isOpen ? "translate-x-0" : "-translate-x-full 2xl:translate-x-0"
        )}
      >
        {/* Close button for mobile */}
        <button
          className="2xl:hidden absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Logo section */}
        <div className="flex py-5 items-center gap-2 px-6">
          <TaskFill className="text-text text-2xl" />
          <span className="text-primary text-2xl font-bold">Soar Task</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group relative flex text-base items-center gap-3 rounded-lg p-3 font-medium transition-colors",
                  isActive ? "text-sidebar-active" : "text-sidebar-text hover:text-sidebar-active"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute -left-3 top-0 h-full w-1.5 rounded-r-lg bg-sidebar-active"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={cn(
                    "h-5 w-5 flex-shrink-0 group-hover:text-sidebar-active",
                    isActive ? "text-sidebar-active" : "text-sidebar-text"
                  )}
                >
                  {item.icon()}
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
