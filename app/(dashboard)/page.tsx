import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>This is an authenticated route</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
