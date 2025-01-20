import { useState } from "react";
import { IconButton } from "~/components/ui/icon-button";
import { Avatar } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import { MenuIcon, SearchIcon, BellIcon, SettingsIcon, LogOut, User } from "lucide-react";
import { Title } from "./title";
import { useUserStore } from "~/stores/user.store";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { Dropdown, DropdownItem } from "~/components/ui/dropdown";

interface HeaderProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function Header({ isOpen, onClose, title }: HeaderProps) {
  const user = useUserStore((state) => state.user);
  return (
    <header className="sticky top-0 border-b bg-white z-30 2xl:ml-64">
      <div className="flex flex-col lg:flex-row 2xl:items-center py-3 2xl:container mx-auto">
        <div className="flex items-center justify-between px-6 py-4 lg:py-0 h-16 lg:h-auto lg:w-auto">
          <IconButton variant="ghost" className="2xl:hidden" onClick={() => !isOpen && onClose()}>
            <MenuIcon className="w-5 h-5" />
          </IconButton>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              exit={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              key={title}
            >
              <Title>{title}</Title>
            </motion.div>
          </AnimatePresence>
          <Avatar src={user?.avatar} alt={user?.name || ""} size="sm" className="lg:hidden" />
        </div>
        <div className="flex-1" />
        <div className="px-6 pb-4 lg:pb-0 lg:flex lg:items-center lg:gap-6">
          <Input
            rounded="full"
            type="search"
            placeholder="Search for something"
            className="w-full lg:max-w-64"
            icon={<SearchIcon className="size-4 text-placeholder" />}
          />
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Dropdown
              trigger={
                <Button variant="light" size="icon">
                  <SettingsIcon className="size-5" />
                </Button>
              }
            >
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem>Preferences</DropdownItem>
            </Dropdown>

            <Dropdown
              trigger={
                <Button variant="light" size="icon" className="relative text-primary-blue">
                  <div className="absolute top-2 right-2.5 bg-background size-2 rounded-full border-[1.5px] border-primary-blue"></div>
                  <BellIcon className="size-5" />
                </Button>
              }
            >
              <div className="w-80 p-2">
                <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b">
                  <span className="font-medium">Notifications</span>
                  <span className="text-xs text-muted-foreground">Mark all as read</span>
                </div>
                <div className="space-y-1">
                  <DropdownItem className="flex flex-col items-start gap-1 p-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-blue"></div>
                      <span className="font-medium">New message</span>
                    </div>
                    <p className="text-xs text-muted-foreground">John Doe sent you a message</p>
                    <span className="text-xs text-muted-foreground">2 minutes ago</span>
                  </DropdownItem>
                  <DropdownItem className="flex flex-col items-start gap-1 p-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary-blue"></div>
                      <span className="font-medium">Project update</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      New version deployed successfully
                    </p>
                    <span className="text-xs text-muted-foreground">1 hour ago</span>
                  </DropdownItem>
                </div>
                <div className="mt-2 border-t pt-2">
                  <DropdownItem className="w-full text-center text-sm text-primary-blue">
                    View all notifications
                  </DropdownItem>
                </div>
              </div>
            </Dropdown>

            <Dropdown
              trigger={
                <Avatar src={user?.avatar} alt={user?.name || ""} className="cursor-pointer" />
              }
            >
              <DropdownItem className="gap-2">
                <User className="size-4" />
                Profile
              </DropdownItem>
              <DropdownItem className="gap-2 text-red-600">
                <LogOut className="size-4" />
                Logout
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
