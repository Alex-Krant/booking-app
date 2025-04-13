import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-orange-200/20">
      <div className="max-w-[1300px] h-14 p-6 mx-auto flex justify-between items-center font-bold">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/images/logo.sg"
              alt="Adode Media Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">Adode Media</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Button variant="link" asChild>
            <Link href="/">Studios</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/">Pricing</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/">About</Link>
          </Button>
          <Button variant="default" className="bg-orange-500 hover:bg-orange-600 rounded-full" asChild>
            <Link href="/account">My Space</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
