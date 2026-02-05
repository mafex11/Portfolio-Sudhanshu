"use client";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface Props {
    language: string;
    code: string;
}

const CodeBlock = ({ language, code }: Props) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const codeTheme = mounted && resolvedTheme === "light" ? vs : vscDarkPlus;

    return (
        <SyntaxHighlighter language={language} style={codeTheme}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
