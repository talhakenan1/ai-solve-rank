
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const AI_SUBJECTS = [
  { id: 1, name: "Mathematics", icon: "📐" },
  { id: 2, name: "Physics", icon: "⚡" },
  { id: 3, name: "Chemistry", icon: "🧪" },
  { id: 4, name: "Biology", icon: "🧬" },
  { id: 5, name: "Computer Science", icon: "💻" },
  { id: 6, name: "History", icon: "📚" },
  { id: 7, name: "Literature", icon: "📖" },
  { id: 8, name: "Geography", icon: "🌍" },
  { id: 9, name: "Languages", icon: "🗣️" },
];

interface Question {
  id: number;
  subject: string;
  question: string;
  image?: string;
  answer?: string;
  timestamp: Date;
}

const AISolve = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [pastQuestions, setPastQuestions] = useState<Question[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitQuestion = () => {
    if (!selectedSubject || !question.trim()) return;

    const newQuestion: Question = {
      id: Date.now(),
      subject: selectedSubject,
      question: question.trim(),
      image: image ? URL.createObjectURL(image) : undefined,
      timestamp: new Date(),
    };

    setPastQuestions([newQuestion, ...pastQuestions]);
    setQuestion("");
    setImage(null);
  };

  return (
    <div className="flex-1 p-4 pb-20">
      <div className="max-w-md mx-auto">
        {!selectedSubject ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">Select Subject</h1>
            <div className="grid grid-cols-3 gap-4">
              {AI_SUBJECTS.map((subject) => (
                <Button
                  key={subject.id}
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center gap-2"
                  onClick={() => setSelectedSubject(subject.name)}
                >
                  <span className="text-2xl">{subject.icon}</span>
                  <span className="text-sm text-center">{subject.name}</span>
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="px-0"
                onClick={() => setSelectedSubject(null)}
              >
                ←
              </Button>
              <h2 className="text-xl font-semibold">{selectedSubject}</h2>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Textarea
                  placeholder="Ask your question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[120px] pr-12"
                />
                <label className="absolute bottom-3 right-3 cursor-pointer">
                  <ImagePlus className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>

              {image && (
                <div className="relative w-full h-40 bg-muted rounded-md overflow-hidden">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => setImage(null)}
                  >
                    ×
                  </Button>
                </div>
              )}

              <Button
                className="w-full"
                onClick={handleSubmitQuestion}
                disabled={!question.trim()}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Question
              </Button>
            </div>

            {pastQuestions.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Past Questions</h3>
                <div className="space-y-4">
                  {pastQuestions
                    .filter((q) => q.subject === selectedSubject)
                    .map((q) => (
                      <div
                        key={q.id}
                        className="p-4 rounded-lg bg-card border"
                      >
                        <p className="mb-2">{q.question}</p>
                        {q.image && (
                          <img
                            src={q.image}
                            alt="Question"
                            className="w-full h-32 object-cover rounded-md mb-2"
                          />
                        )}
                        <time className="text-sm text-muted-foreground">
                          {q.timestamp.toLocaleString()}
                        </time>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AISolve;
