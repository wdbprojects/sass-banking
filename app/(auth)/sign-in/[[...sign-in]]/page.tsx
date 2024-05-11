import Image from "next/image";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SymbolIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

const Page = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or create an account to get back to your Dashboard
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <SymbolIcon className="h-7 w-7 text-[#7E8CA0] animate-spin" />
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center ">
        <Image src="/logo.svg" height={200} width={200} alt="Logo" />
      </div>
    </div>
  );
};

export default Page;
