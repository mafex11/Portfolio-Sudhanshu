import { FlareCursor, Footer, Header, Providers, TopButton } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ColorSchemeScript } from '@mantine/core';
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import Head from "./head";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "antialiased min-h-screen aeonikFont",
                font.className,
            )}
        >

            <head>
                <ColorSchemeScript />
                <Head />
            </head>

            <body className="min-h-screen bg-background text-foreground">

                <Providers>
                    <Header />
                    <FlareCursor />
                    {children}
                    <TopButton />
                    <Footer />
                </Providers>

            </body>
        </html>
    );
};
