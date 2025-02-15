
import { useState } from "react";
import { Send, Upload, History, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Course options for AI selection
const courses = [
  { id: "math", name: "Mathematics" },
  { id: "physics", name: "Physics" },
  { id: "chemistry", name: "Chemistry" },
  { id: "biology", name: "Biology" },
  { id: "cs", name: "Computer Science" },
  { id: "literature", name: "Literature" },
  { id: "history", name: "History" },
  { id: "geography", name: "Geography" },
  { id: "languages", name: "Languages" },
];

// Type for question history
interface QuestionHistory {
  id: string;
  course: string;
  question: string;
  answer?: string;
  image?: string;
  timestamp: Date;
}

const AISolve = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  
  // Mock history data - replace with actual data storage later
  const [history] = useState<QuestionHistory[]>([
    {
      id: "1",
      course: "Mathematics",
      question: "How do I solve quadratic equations?",
      answer: "To solve quadratic equations...",
      timestamp: new Date(),
    },
    // Add more mock history items as needed
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement AI solving logic with selectedCourse and image
    setQuestion("");
    setImage(null);
  };

  if (!selectedCourse && !showHistory) {
    return (
      <div className="flex-1 p-4 pb-20 overflow-y-auto">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Select Course
            </span>
            <h1 className="mt-4 text-2xl font-semibold">Choose Your Subject</h1>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedCourse(course.id)}
                className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors text-left"
              >
                <h3 className="font-medium">{course.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showHistory) {
    return (
      <div className="flex-1 p-4 pb-20 overflow-y-auto">
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              History
            </span>
            <button
              onClick={() => setShowHistory(false)}
              className="p-2 rounded-full hover:bg-secondary/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg bg-secondary/50 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {item.course}
                  </span>
                  <span className="text-xs text-foreground/60">
                    {item.timestamp.toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm">{item.question}</p>
                {item.answer && (
                  <p className="text-sm text-foreground/80">{item.answer}</p>
                )}
                {item.image && (
                  <img
                    src={item.image}
                    alt="Question attachment"
                    className="w-full h-32 object-cover rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 pb-20 overflow-y-auto">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {courses.find((c) => c.id === selectedCourse)?.name}
            </span>
            <h1 className="mt-4 text-2xl font-semibold">
              What would you like to solve?
            </h1>
          </div>
          <button
            onClick={() => setShowHistory(true)}
            className="p-2 rounded-full hover:bg-secondary/50"
            title="View History"
          >
            <History className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="w-full h-32 p-4 rounded-lg bg-secondary/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="flex items-center gap-2">
            <label
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 border-dashed cursor-pointer",
                image ? "border-primary" : "border-secondary hover:border-primary/50"
              )}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Upload className="w-4 h-4" />
              {image ? "Change Image" : "Add Image"}
            </label>

            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Solve
            </button>
          </div>

          {image && (
            <div className="relative">
              <img
                src={image}
                alt="Question attachment"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 p-1 rounded-full bg-foreground/80 text-background hover:bg-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AISolve;
