import { Avatar } from "~/components/ui/avatar";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Title } from "~/components/ui/title";
import { cn } from "~/lib/utils";
import { Column } from "~/components/ui/column";

type Contact = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

const contacts: Contact[] = [
  {
    id: "1",
    name: "Livia Bator",
    role: "CEO",
    avatar: "/avatars/livia.jpg",
  },
  {
    id: "2",
    name: "Randy Press",
    role: "Director",
    avatar: "/avatars/randy.jpg",
  },
  {
    id: "3",
    name: "Workman",
    role: "Designer",
    avatar: "/avatars/workman.jpg",
  },
];

type QuickTransferProps = {
  span?: 1 | 2 | 3;
};

export function QuickTransfer({ span }: QuickTransferProps) {
  return (
    <Column span={span}>
      <Title className="mb-4">Quick Transfer</Title>
      <Card className="p-6">
        <div className="space-y-6">
          {/* Contact List */}
          <div className="flex gap-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="text-center">
                <Avatar
                  src={contact.avatar}
                  alt={contact.name}
                  className="h-16 w-16 mx-auto mb-2"
                />
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-slate-500">{contact.role}</div>
              </div>
            ))}
            <button className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-100">
              <span className="text-2xl text-slate-400">&gt;</span>
            </button>
          </div>

          {/* Transfer Input */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-slate-500">Write Amount</label>
              <Input type="text" value="525.50" className="text-2xl font-medium" />
            </div>
            <Button className="w-full gap-2">
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
