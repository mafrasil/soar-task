import { useState } from "react";
import { IconButton } from "~/components/ui/icon-button";
import { Avatar } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import { MenuIcon, SearchIcon, BellIcon, SettingsIcon } from "lucide-react";
import { Title } from "./title";

interface HeaderProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function Header({ isOpen, onClose, title }: HeaderProps) {
  return (
    <header className="sticky top-0 bg-white z-30 md:ml-64">
      <div className="flex flex-col md:flex-row md:items-center md:h-16 md:container mx-auto">
        <div className="flex items-center justify-between px-6 py-4 md:py-0 h-16 md:h-auto md:w-auto">
          <IconButton variant="ghost" className="md:hidden" onClick={() => !isOpen && onClose()}>
            <MenuIcon className="w-5 h-5" />
          </IconButton>
          <Title>{title}</Title>
          <Avatar alt="Profile" size="sm" className="md:hidden" />
        </div>
        <div className="px-6 pb-4 md:pb-0 md:flex-1 md:px-4">
          <div className="max-w-md md:ml-auto">
            <Input
              type="search"
              placeholder="Search for something"
              icon={<SearchIcon className="w-5 h-5" />}
            />
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:gap-4 md:px-6">
          <IconButton variant="ghost" size="sm">
            <BellIcon className="w-5 h-5" />
          </IconButton>
          <IconButton variant="ghost" size="sm">
            <SettingsIcon className="w-5 h-5" />
          </IconButton>
          <Avatar alt="Eddy Cusuma" size="sm" />
        </div>
      </div>
    </header>
  );
}
