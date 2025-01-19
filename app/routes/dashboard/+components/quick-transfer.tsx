import { Avatar } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Title } from "~/components/ui/title";
import { cn } from "~/lib/utils";
import { Column } from "~/components/ui/column";
import React from "react";
import { ChevronRight } from "lucide-react";
import { mockData } from "~/services/mock-data.service";

type Contact = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

type QuickTransferProps = {
  span?: 1 | 2 | 3;
};

export function QuickTransfer({ span }: QuickTransferProps) {
  const [amount, setAmount] = React.useState("525.50");
  const [currentPage, setCurrentPage] = React.useState(0);
  const [contacts, setContacts] = React.useState<Contact[]>([]);

  React.useEffect(() => {
    // Fetch contacts when component mounts
    const loadContacts = async () => {
      const data = await mockData.getContacts();
      setContacts(data);
    };
    loadContacts();
  }, []);

  const contactsPerPage = 3;
  const totalPages = Math.ceil(contacts.length / contactsPerPage);

  const visibleContacts = contacts.slice(
    currentPage * contactsPerPage,
    currentPage * contactsPerPage + contactsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <Column span={span}>
      <Title className="mb-4">Quick Transfer</Title>
      <Card className="p-6">
        <div className="space-y-6">
          {/* Contact List */}
          <div className="relative flex">
            <div className="flex-1 overflow-hidden">
              <div
                className="flex gap-2 transition-transform duration-300 ease-in-out pl-0"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {contacts.map((contact) => (
                  <div key={contact.id} className="text-center flex-shrink-0 w-[32%]">
                    <Avatar
                      src={contact.avatar}
                      alt={contact.name}
                      className="size-20 mx-auto mb-2"
                    />
                    <div className="font-medium text-sm">{contact.name}</div>
                    <div
                      className={cn(
                        "text-xs text-slate-500",
                        contact.role.toLowerCase() === "ceo" && "font-semibold"
                      )}
                    >
                      {contact.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center pl-2">
              <button
                onClick={handleNextPage}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200
                  transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Transfer Input */}
          <div className="flex items-center gap-4">
            <span className="text-blue-400">Write Amount</span>
            <div className="flex-1">
              <Input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-2xl font-medium bg-slate-50"
              />
            </div>
            <Button className="flex items-center gap-2 px-6 bg-black text-white hover:bg-black/90 rounded-full">
              Send
              <span className="inline-block rotate-45">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </Column>
  );
}
