"use client";
import { Button, Input } from "@crest-ui/ui";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  return (
    <main className="mx-auto max-w-2xl p-8 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-display">Crest UI</h1>
        <p className="text-peak-950/70">Tokens + Base Components demo</p>
      </header>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Your name</label>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="rounded-xl border border-peak-950/10 p-4 shadow-low">
          <p>Hello, {name || "friend"} 👋</p>
        </div>
      </div>
    </main>
  );
}
