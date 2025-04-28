"use client";

import Image from "next/image";
import  logo from "@/public/images/logo.svg";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center text-center gap-5 border p-10 rounded-lg shadow-lg">
                <Image src={logo} alt="logo" width={48} height={48} priority={true} />
                <h1 className="text-2xl font-bold">404 | Page Not Found</h1>
                <Button onClick={()=> window.location.href = '/'}>Back to Home</Button>
            </div>
        </div>
    );
}