import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

/**
 * ThemeToggle Component - Dark/Light Mode Toggle
 * Styled to match the VOIP CAT logo DNA
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-lg border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 group"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative h-5 w-5">
        <Sun 
          className={`absolute inset-0 h-5 w-5 transition-all duration-500 transform ${
            theme === 'light' ? 'scale-100 rotate-0 opacity-100 text-primary' : 'scale-0 rotate-90 opacity-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 h-5 w-5 transition-all duration-500 transform ${
            theme === 'dark' ? 'scale-100 rotate-0 opacity-100 text-primary' : 'scale-0 -rotate-90 opacity-0'
          }`} 
        />
      </div>
      <span className="sr-only">Toggle theme</span>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-primary/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
    </Button>
  );
}
