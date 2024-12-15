"use client"
import Link from "next/link";

function ClientSideCardTitle({children, href}){
    return (
        <Link href={href} >
            {children}
        </Link>
    )
}
export default ClientSideCardTitle;