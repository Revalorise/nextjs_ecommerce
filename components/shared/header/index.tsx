import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import logo from "@/public/images/logo.svg";
import Menu from "@/components/shared/header/menu";

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
                <Menu />
            </div>
        </header>
    );
};