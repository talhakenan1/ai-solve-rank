
import { useState } from "react";
import Navigation from "@/components/Navigation";
import AISolve from "@/components/AISolve";
import Ranking from "@/components/Ranking";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "ranking">("ai");

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-background to-secondary/20 pt-16">
      {activeTab === "ai" ? <AISolve /> : <Ranking />}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
