// ✅ good: imports from use-tab-state module
// import { useTabState } from "./use-tab-state";

// ❌ bad: these both import from the barrel file
// import { useTabState } from "../tab";
import { useTabState } from "./";

export function TabPanel({ children }: { children: React.ReactNode }) {
  const state = useTabState();

  return (
    <div>
      <h1>This is Tab panel (state: {state})</h1>
      <div>{children}</div>
    </div>
  );
}
