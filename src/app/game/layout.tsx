import type { ReactNode } from "react";
import { GameNavBar } from "./_sections";

export default function GameLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-screen-md">
      <GameNavBar />
      {children}
    </div>
  );
}
