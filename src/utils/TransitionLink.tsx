"use client"

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, MouseEvent } from "react";
import "../styles/color-plates/color-plate.css"
import "../styles/utils/transition-link.style.css"

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function TransitionLink({
    children,
    href,
    className,
    ...props
}: TransitionLinkProps) {
    const router = useRouter()

    const handlingTransition = async (e: React.MouseEvent<HTMLAnchorElement | MouseEvent>) => {
        const MainApp = document.querySelector(".app-page-view") as HTMLElement | null;
        console.log(MainApp)
        e.preventDefault()
        MainApp?.classList.add("page-transition")
        await sleep(500);
        console.log("1")
        router.push(href);
        console.log("pushed href")
        await sleep(500);
        console.log("2")
        MainApp?.classList.remove("page-transition");
    };
    return (
        <Link href={href} {...props} className={className} onClick={handlingTransition}>
            {children}
        </Link>
    );
}
