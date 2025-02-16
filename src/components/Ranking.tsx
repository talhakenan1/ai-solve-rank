
import { Crown } from "lucide-react";

// Temporary mock data
const rankings = [
  { id: 1, name: "Alex Thompson", score: 42 },
  { id: 2, name: "Maria Garcia", score: 38 },
  { id: 3, name: "John Smith", score: 35 },
  // Add more mock data as needed
];

const Ranking = () => {
  return (
    <div className="flex-1 p-4 pb-20 overflow-y-auto">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Rankings
          </span>
          <h1 className="mt-4 text-2xl font-semibold">Top Problem Solvers</h1>
        </div>

        <div className="space-y-3">
          {rankings.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                {index === 0 ? (
                  <Crown className="w-4 h-4 text-primary" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-foreground/60">
                  {user.score} questions solved
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
