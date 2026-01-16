import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SystemFlowDemo } from "@/components/ui/system-flow-demo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function FlowDemo() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </Button>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">System Flow Demo</h1>
            <p className="text-muted-foreground">
              Interactive demonstration of the WeaveAI enquiry system
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>How the System Works</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <SystemFlowDemo />
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>Hover to pause • Click dots to jump to step</p>
          </div>
        </div>
      </div>
    </main>
  );
}
