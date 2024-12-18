import './globals.css'
import {Metadata} from 'next'
import React from "react";
import Link from "next/link";
import DarkModeToggle from './components/DarkModeToggle';

export const metadata: Metadata = {
    title: 'Backend Engineer Portfolio',
    description: 'Personal portfolio of a backend engineer',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <div className="container">
            <DarkModeToggle />
            <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/writing">Writing</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
                <Link href="https://drive.google.com/file/d/17tlymfi691VVJrMX2o-6ttcNf8ZV37bw/view?usp=drive_link" className="flex items-center gap-1">
                    R/e/sume
                </Link>
            </nav>
            {children}
        </div>
        </body>
        </html>
    )
}

