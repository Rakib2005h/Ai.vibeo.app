import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MotionDiv } from "@/components/ui/motion";
import { Upload, Settings, Video } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 p-4 text-white">
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">AI Vibeo Studio</h1>
        <p className="text-center mb-10 text-lg text-gray-300">
          Create, edit & enhance videos with AI – fast, easy & powerful.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <MotionDiv className="col-span-1">
            <Card className="bg-slate-800 border border-slate-700">
              <CardContent className="p-6 space-y-4">
                <Upload className="w-8 h-8 text-blue-400" />
                <h2 className="text-xl font-semibold">Upload Video</h2>
                <Input type="file" className="bg-slate-700 border-slate-600" />
                <Button className="w-full">Start Editing</Button>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv className="col-span-1">
            <Card className="bg-slate-800 border border-slate-700">
              <CardContent className="p-6 space-y-4">
                <Video className="w-8 h-8 text-green-400" />
                <h2 className="text-xl font-semibold">AI Effects</h2>
                <p className="text-gray-400 text-sm">Apply smart transitions, filters, subtitles and more.</p>
                <Button className="w-full">Enhance with AI</Button>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv className="col-span-1">
            <Card className="bg-slate-800 border border-slate-700">
              <CardContent className="p-6 space-y-4">
                <Settings className="w-8 h-8 text-yellow-400" />
                <h2 className="text-xl font-semibold">Settings & Export</h2>
                <p className="text-gray-400 text-sm">Choose format, quality, thumbnails and more.</p>
                <Button className="w-full">Finish & Download</Button>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}