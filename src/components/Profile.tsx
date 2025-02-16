
import { useState } from "react";
import { Camera, Mail, KeyRound, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Profile = () => {
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  return (
    <div className="flex-1 p-4 pb-20 max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <div className="relative">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 p-1 bg-primary rounded-full text-white">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <h2 className="text-xl font-semibold">Username</h2>
        <div className="text-sm text-muted-foreground">
          Rank #123 • Score: 1500
        </div>
      </div>

      <div className="space-y-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <Mail className="w-4 h-4 mr-2" />
              Account Information
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Account Information</SheetTitle>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" value="user@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">New Password</label>
                <Input type="password" placeholder="Enter new password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm Password</label>
                <Input type="password" placeholder="Confirm new password" />
              </div>
              <Button className="w-full">Save Changes</Button>
            </div>
          </SheetContent>
        </Sheet>

        <Button variant="outline" className="w-full justify-start">
          <Share2 className="w-4 h-4 mr-2" />
          Share App
        </Button>
      </div>
    </div>
  );
};

export default Profile;
