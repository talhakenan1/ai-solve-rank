
import { useState } from "react";
import { cn } from "@/lib/utils";

interface User {
  id: number;
  name: string;
  avatar: string;
  solvedQuestions: number;
  rank: number;
}

const MOCK_USERS: User[] = [
  { id: 1, name: "John Doe", avatar: "/placeholder.svg", solvedQuestions: 150, rank: 1 },
  { id: 2, name: "Jane Smith", avatar: "/placeholder.svg", solvedQuestions: 145, rank: 2 },
  { id: 3, name: "Alex Johnson", avatar: "/placeholder.svg", solvedQuestions: 130, rank: 3 },
  { id: 4, name: "Sarah Wilson", avatar: "/placeholder.svg", solvedQuestions: 120, rank: 4 },
  { id: 5, name: "Mike Brown", avatar: "/placeholder.svg", solvedQuestions: 110, rank: 5 },
];

const Ranking = () => {
  const [users] = useState<User[]>(MOCK_USERS);

  return (
    <div className="flex-1 p-4 pb-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Top Solvers</h1>
        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-4 bg-card rounded-lg border"
            >
              <div className="flex items-center flex-1">
                <span className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-full mr-4 font-semibold",
                  user.rank === 1 && "bg-yellow-500 text-yellow-950",
                  user.rank === 2 && "bg-gray-300 text-gray-700",
                  user.rank === 3 && "bg-amber-600 text-amber-950",
                )}
                >
                  {user.rank}
                </span>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {user.solvedQuestions} solved
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
