"use client";

import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme } from "next-themes";
import { ReactNode, useState } from "react";
import { Toaster } from "../ui/Sonner";

const MantineThemeProvider = ({ children }: { children: ReactNode }) => {
    const { resolvedTheme } = useTheme();
    const colorScheme = resolvedTheme === "light" ? "light" : "dark";

    return (
        <MantineProvider forceColorScheme={colorScheme}>
            {children}
        </MantineProvider>
    );
};

const Providers = ({
    children
}: {
    children: ReactNode
}) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <MantineThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <Toaster />
                    {children}
                </QueryClientProvider>
            </MantineThemeProvider>
        </ThemeProvider>
    )
};

export default Providers;
