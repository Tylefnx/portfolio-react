export type LineType = "command" | "output" | "error";

export interface TerminalLine {
  id: string;
  text: string;
  type: LineType;
}
