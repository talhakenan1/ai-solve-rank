
import { Brain, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: "ai" | "ranking";
  onTabChange: (tab: "ai" | "ranking") => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 glass">
      <div className="max-w-md mx-auto h-full flex items-center justify-around">
        <button
          onClick={() => onTabChange("ai")}
          className={cn(
            "flex flex-col items-center justify-center w-24 h-full transition-all",
            activeTab === "ai"
              ? "text-primary scale-110"
              : "text-foreground/60 hover:text-foreground/80"
          )}
        >
          <Brain className="w-6 h-6" />
          <span className="text-xs mt-1">AI Solve</span>
        </button>
        <button
          onClick={() => onTabChange("ranking")}
          className={cn(
            "flex flex-col items-center justify-center w-24 h-full transition-all",
            activeTab === "ranking"
              ? "text-primary scale-110"
              : "text-foreground/60 hover:text-foreground/80"
          )}
        >
          <Trophy className="w-6 h-6" />
          <span className="text-xs mt-1">Ranking</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
