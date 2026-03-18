import { useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { TerminalLine } from "../types";

export function useTerminal() {
  const t = useTranslations("terminal");
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");

  const addLines = useCallback((texts: string[], type: "output" | "error" = "output") => {
    const newLines = texts.map((text) => ({
      id: crypto.randomUUID(),
      text,
      type,
    }));
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  // Initialize terminal
  useEffect(() => {
    // Only run on client to avoid hydration mismatch with randomUUID
    addLines(t.raw("welcome") as string[]);
    
    // Add initial fake command output
    const timer = setTimeout(() => {
      setLines((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: "guest@tayfun-vps:~$ whoami", type: "command" },
      ]);
      addLines(t.raw("whoami") as string[]);
      addLines([""]); // Empty line
    }, 500);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    setLines((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: `guest@tayfun-vps:~$ ${command}`, type: "command" },
    ]);

    const cleanCommand = command.trim().toLowerCase();

    switch (cleanCommand) {
      case "help":
        const helpObj = t.raw("help") as Record<string, string>;
        // Output titles and commands
        const helpLines = [
          helpObj.title,
          helpObj.whoami,
          helpObj.projects,
          helpObj.skills,
          helpObj.contact,
          helpObj.clear,
        ];
        addLines(helpLines);
        break;
      case "whoami":
        addLines(t.raw("whoami") as string[]);
        break;
      case "projects":
        addLines(t.raw("projects") as string[]);
        break;
      case "skills":
        addLines(t.raw("skills") as string[]);
        break;
      case "contact":
        addLines([t("contactEmail")]);
        break;
      case "clear":
        setLines([]);
        addLines(t.raw("welcome") as string[]);
        break;
      default:
        addLines([t("notFound", { command: cleanCommand })], "error");
        break;
    }
    
    setInput("");
  };

  return {
    lines,
    input,
    setInput,
    handleCommand,
  };
}
