"use client";

import { useEffect, useRef } from "react";
import { useTerminal } from "../hooks/useTerminal";
import { TerminalLine } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function TerminalView() {
  const { lines, input, setInput, handleCommand } = useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom when lines change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-base rounded-xl shadow-2xl border border-surface0 overflow-hidden flex flex-col font-mono text-sm sm:text-base h-[500px]"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Mac/Linux styled Top Bar */}
      <div className="h-10 bg-mantle flex items-center px-4 border-b border-surface0 gap-2 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red" />
        <div className="w-3 h-3 rounded-full bg-yellow" />
        <div className="w-3 h-3 rounded-full bg-green" />
        <span className="ml-auto text-subtext0 text-xs text-center absolute left-0 right-0 pointer-events-none">
          guest@tayfun-vps ~
        </span>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-text custom-scrollbar">
        <AnimatePresence initial={false}>
          {lines.map((line) => (
            <TerminalLineRow key={line.id} line={line} />
          ))}
        </AnimatePresence>

        {/* Input Area */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green font-bold shrink-0">guest@tayfun-vps:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-text focus:ring-0 p-0"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} className="h-4" />
      </div>
    </div>
  );
}

function TerminalLineRow({ line }: { line: TerminalLine }) {
  // Simple fade and slide up animation for each line
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "whitespace-pre-wrap py-0.5",
        line.type === "command" && "text-blue font-semibold",
        line.type === "error" && "text-red",
        line.type === "output" && "text-subtext1"
      )}
    >
      {line.text}
    </motion.div>
  );
}
