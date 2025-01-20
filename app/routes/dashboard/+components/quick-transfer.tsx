import { Avatar } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Title } from "~/components/ui/title";
import { cn } from "~/lib/utils";
import { Column } from "~/components/ui/column";
import React from "react";
import { ChevronRight, SendIcon } from "lucide-react";
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
  const [amount, setAmount] = React.useState<number>(525.5);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadContacts = async () => {
      const data = await mockData.getContacts();
      setContacts(data);
      if (data.length > 0) {
        setSelectedContact(data[0].id);
      }
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
      <Card className="px-4 py-8">
        <div className="space-y-6">
          {/* Contact List */}
          <div className="relative flex" role="region" aria-label="Contact Selection">
            <div className="flex-1 overflow-hidden" role="listbox" aria-label="Contact List">
              <div
                className="flex gap-2 transition-transform duration-300 ease-in-out pl-0"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    role="option"
                    aria-selected={selectedContact === contact.id}
                    className="text-center flex-shrink-0 w-[32%] cursor-pointer"
                    onClick={() => setSelectedContact(contact.id)}
                  >
                    <Avatar
                      src={contact.avatar}
                      alt={contact.name}
                      className="size-12 lg:size-14 xl:size-[4.5rem] mx-auto mb-2"
                    />
                    <div
                      className={cn(
                        "text-xs text-text truncate",
                        selectedContact === contact.id && "font-bold"
                      )}
                    >
                      {contact.name}
                    </div>
                    <div
                      className={cn(
                        "text-xs text-placeholder",
                        selectedContact === contact.id && "font-bold"
                      )}
                    >
                      {contact.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNextPage}
              aria-label="Show next contacts"
              className="rounded-full size-10 shadow-xl flex justify-center items-center flex-shrink-0"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Transfer Input */}
          <div className="flex items-center gap-4 px-4 pt-2">
            <span className="text-placeholder hidden xl:flex items-center gap-1 text-xs xl:text-sm">
              Amount
            </span>
            <div className="flex-1 flex items-center relative">
              <Input
                type="number"
                step="0.01"
                min="0"
                rounded="full"
                className="text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none"
                value={amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: false,
                })}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <Button className="rounded-full absolute gap-2 right-0 py-3 px-4 2xl:px-8 text-sm font-medium">
                Send <SendIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Column>
  );
}
