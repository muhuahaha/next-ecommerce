"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
