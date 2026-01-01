import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-lg text-muted-foreground">
                This page could not be found.
            </p>
            <Link href="/" className={cn(buttonVariants({ variant: "default" }))}>
                Go back home
            </Link>
        </div>
    );
}
