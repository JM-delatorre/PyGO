import React from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { useTheme } from "next-themes";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

interface CodeTextAreaProps {
    code: string;
    setCode: any;
    lang: string;
}

const CodeTextArea = ({ code, setCode, lang }: CodeTextAreaProps) => {
    const { systemTheme, theme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;;
    const customPlaceHold = lang === 'py' ? 'Enter your python code' : 'Your Go code goes here ';
    return (
        <div data-color-mode={currentTheme}>
            <CodeEditor
                className="rounded-lg min-h-[50vh]"
                value={code}
                language={lang}
                placeholder={customPlaceHold}
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontFamily:
                        "ui-monospace,monospace",
                    fontSize: 18,
                }}
                
            />
        </div>
    );
};

export default CodeTextArea