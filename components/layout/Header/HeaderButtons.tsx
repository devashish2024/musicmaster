import { Button } from "@/components/ui/button";
import { ArrowRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { UserIcon } from "lucide-react";

export default function HeaderButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        className="transition hidden lg:flex"
      >
        <UserIcon className="h-4 w-4" />
      </Button>
      <Button
        variant={"destructive"}
        className="group bg-yellow-600 hover:bg-yellow-600/70 hidden lg:flex"
      >
        Book a free trial
        <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
      </Button>
      <Button
        variant={"outline"}
        className="lg:hidden"
      >
        <HamburgerMenuIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
