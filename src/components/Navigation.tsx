
import { ArrowLeft, Brain, Trophy, LogOut, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavigationProps {
  activeTab: "ai" | "ranking";
  onTabChange: (tab: "ai" | "ranking") => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const showBackButton = location.pathname.includes('/question');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 glass z-10">
        <div className="max-w-md mx-auto h-full flex items-center justify-between px-4">
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-foreground/60 hover:text-foreground/80"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <div className="flex-1" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full">
                <Avatar>
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                <User className="w-4 h-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/settings')}>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

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
    </>
  );
};

export default Navigation;
