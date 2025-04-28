import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import  logo from "@/public/images/logo.svg";
import ModeToggle from "@/components/shared/header/mode-toggle";

export default function Header() {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <Link href='/' className="flex-start">
                    <Image
                        src={logo}
                        alt={`${APP_NAME} Logo`}
                        width={48} height={48}
                        priority={true}
                    />
                    <span className="hidden lg:block font-bold text-2xl ml-3">
                        {APP_NAME}
                    </span>
                </Link>
                <div className="space-x-2">
                    <ModeToggle />
                    <Button asChild variant="ghost">
                        <Link href='/cart'>
                            <ShoppingCart/> Cart
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href='/sign-in'>
                            <UserIcon/> Sign In
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}