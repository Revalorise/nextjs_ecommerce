import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Home",
    description: "Home page description",
}

const delay = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

export default async function HomePage() {
    await delay(2000);
    return (
        <div>
            <Button>A Button</Button>
        </div>
    )
}