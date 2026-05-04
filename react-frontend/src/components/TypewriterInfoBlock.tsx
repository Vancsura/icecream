import { useEffect, useRef, useState } from "react";

type TypewriterInfoBlockProps = {
    data: {
        title: string;
        hours: string[];
        address: string;
    };
    speed?: number;
    className?: string;
};

export default function TypewriterInfoBlock({ data, speed = 22, className = "" }: TypewriterInfoBlockProps) {
    const blockRef = useRef<HTMLDivElement | null>(null);
    const [typedText, setTypedText] = useState("");
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        const block = blockRef.current;
        if (!block) return;

        let interval: number | null = null;
        let hasStarted = false;
        const fullText = `
        ${data.title}

        Nyitvatartás:
        ${data.hours.join("\n")}

        Cím:
        ${data.address}
        `
            .split("\n")
            .map((line) => line.trim())
            .join("\n")
            .trim();

        const startTyping = () => {
            if (hasStarted) return;
            hasStarted = true;

            let i = 0;

            interval = window.setInterval(() => {
                i++;
                setTypedText(fullText.slice(0, i));

                if (i >= fullText.length) {
                    if (interval) window.clearInterval(interval);
                    setTypingDone(true);
                }
            }, speed);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startTyping();
                    observer.unobserve(block);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -80px 0px",
            }
        );

        observer.observe(block);

        return () => {
            observer.disconnect();
            if (interval) window.clearInterval(interval);
        };
    }, [data, speed]);

    return (
        <div ref={blockRef} className={`info-text ${className}`}>
            <pre className={`typewriter ${typingDone ? "done" : ""}`}>
                {typedText}
            </pre>
        </div>
    );
}