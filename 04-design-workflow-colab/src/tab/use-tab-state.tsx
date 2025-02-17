import { useState } from "react";

export function useTabState() {
  const [state] = useState("hello");
  return state;
}
