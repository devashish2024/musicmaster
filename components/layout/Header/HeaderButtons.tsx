import { Button } from "@/components/ui/button";
import { ArrowRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { UserIcon } from "lucide-react";

export default function HeaderButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        className="transition duration-300 focus:ring-gray-300/60 focus:ring-4 focus:ring-offset-2 hidden md:flex"
      >
        <UserIcon className="h-4 w-4" />
      </Button>
      <Button
        variant={"destructive"}
        className="group focus:ring-4 focus:ring-offset-2 transition duration-300 focus:ring-yellow-400/60 bg-yellow-600 hover:bg-yellow-600/70 hidden md:flex"
      >
        Book a free trial
        <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
      </Button>
      <Button
        variant={"outline"}
        className="md:hidden transition duration-300 focus:ring-gray-300/60 focus:ring-4 focus:ring-offset-2"
      >
        <HamburgerMenuIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
