
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Landing = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const LOADING_DURATION = 5000; // 5 seconds
  const UPDATE_INTERVAL = 50; // Update every 50ms for smooth animation

  useEffect(() => {
    const startTime = Date.now();
    
    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / LOADING_DURATION) * 100, 100);
      
      if (newProgress >= 100) {
        clearInterval(timer);
        navigate('/auth'); // Navigate to auth screen after loading
      } else {
        setProgress(newProgress);
      }
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="h-full flex flex-col items-center justify-center bg-background p-4">
      <div className="w-48 h-48 mb-8">
        <img
          src="/lovable-uploads/0e65a0d7-d589-4b4d-8666-f156cb26f4e7.png"
          alt="AI Solve Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-64">
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};

export default Landing;
