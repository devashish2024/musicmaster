import { TwitterLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white h-16 grid place-items-center">
      <div className="flex flex-col md:flex-row items-center justify-between container p-4">
        <p className="text-sm text-gray-600 mb-4 md:mb-0 md:flex md:flex-col md:gap-2">
          © Copyright 2024, All Rights Reserved
          <span className="text-xs hidden md:flex md:gap-1">
            Built by <Link href="https://ashishagarwal.is-a.dev" target="_blank" className="text-blue-600">Ashish Agarwal</Link>. This project is a part of template and not affilated with any organization.
          </span>
        </p>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <TwitterLogoIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-800">
            <InstagramLogoIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
