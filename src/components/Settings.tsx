
import { useState } from "react";
import { 
  Sun, 
  Moon, 
  HelpCircle, 
  MessageSquare, 
  FileText, 
  Shield, 
  Info 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="flex-1 p-4 pb-20 max-w-md mx-auto space-y-4">
      <div className="flex items-center justify-between p-4 bg-card rounded-lg">
        <span>Theme</span>
        <div className="flex items-center gap-2">
          {isDarkMode ? (
            <Moon className="w-4 h-4 text-muted-foreground" />
          ) : null}
          <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
          {!isDarkMode ? (
            <Sun className="w-4 h-4 text-muted-foreground" />
          ) : null}
        </div>
      </div>

      <Button variant="outline" className="w-full justify-start">
        <HelpCircle className="w-4 h-4 mr-2" />
        FAQ
      </Button>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Feedback
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Send Feedback</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-4">
            <Textarea
              placeholder="Tell us what you think..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[200px]"
            />
            <Button className="w-full">Submit Feedback</Button>
          </div>
        </SheetContent>
      </Sheet>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <FileText className="w-4 h-4 mr-2" />
            Terms and Conditions
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Terms and Conditions</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-muted-foreground">Terms and conditions content will be added later.</p>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <Shield className="w-4 h-4 mr-2" />
            Privacy Policy
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Privacy Policy</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <p className="text-muted-foreground">Privacy policy content will be added later.</p>
          </div>
        </DrawerContent>
      </Drawer>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <Info className="w-4 h-4 mr-2" />
            Version Info
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Version Information</SheetTitle>
          </SheetHeader>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">Current Version: 1.0.0</p>
            <Button variant="outline" className="w-full mt-4">
              Check for Updates
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Settings;
