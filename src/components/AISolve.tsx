
import { useState } from "react";
import { Send } from "lucide-react";

const AISolve = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement AI solving logic
    setQuestion("");
  };

  return (
    <div className="flex-1 p-4 pb-20 overflow-y-auto">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
            AI Assistant
          </span>
          <h1 className="mt-4 text-2xl font-semibold">
            What would you like to solve?
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full h-32 p-4 rounded-lg bg-secondary/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            Solve with AI
          </button>
        </form>
      </div>
    </div>
  );
};

export default AISolve;
