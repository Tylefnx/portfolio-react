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
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    setLines((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: `guest@tayfun-vps:~$ ${trimmedCommand}`, type: "command" },
    ]);

    const cleanCommand = trimmedCommand.toLowerCase();

    const commandMap: Record<string, () => void> = {
      help: () => {
        const helpObj = t.raw("help") as Record<string, string>;
        addLines([
          helpObj.title,
          helpObj.whoami,
          helpObj.projects,
          helpObj.skills,
          helpObj.contact,
          helpObj.clear,
        ]);
      },
      whoami: () => addLines(t.raw("whoami") as string[]),
      projects: () => addLines(t.raw("projects") as string[]),
      skills: () => addLines(t.raw("skills") as string[]),
      contact: () => addLines([t("contactEmail")]),
      clear: () => {
        setLines([]);
        addLines(t.raw("welcome") as string[]);
      },
    };

    const execCommand = commandMap[cleanCommand];
    if (execCommand) {
      execCommand();
    } else {
      addLines([t("notFound", { command: cleanCommand })], "error");
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
