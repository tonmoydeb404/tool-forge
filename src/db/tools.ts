import { TTool } from "@/types/tool";
import { FileText, Key, Unlock } from "lucide-react";

export const tools: TTool[] = [
  {
    key: "password-generator",
    name: "Password Generator",
    description: "Generate secure passwords with customizable options",
    category: "Security",
    icon: Key,
    color: "#ef4444",
  },
  {
    key: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your designs",
    category: "Utility",
    icon: FileText,
    color: "#8b5cf6",
  },
  {
    key: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode and verify JSON Web Tokens",
    category: "Development",
    icon: Unlock,
    color: "#10b981",
  },
];
