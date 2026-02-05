"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./Button";

interface ThemeToggleProps {
    className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : true;
    const label = isDark ? "Switch to light theme" : "Switch to dark theme";

    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={label}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn("h-9 w-9", className)}
        >
            <span className={cn("transition-opacity", !mounted && "opacity-0")}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </span>
        </Button>
    );
};

export default ThemeToggle;
