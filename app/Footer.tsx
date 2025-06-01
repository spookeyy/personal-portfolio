"use client";

import { Code2 } from "lucide-react";

export default function Footer(){
    return (
      <footer className="py-8 border-t border-slate-800/50 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            Copyright © Meshack. <Code2 className="inline w-4 h-4 mx-1" />{" "}
            Software Engineer
          </p>
        </div>
      </footer>
    );
}