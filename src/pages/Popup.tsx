import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FileText, Key, Search, Unlock } from "lucide-react";

type Props = {};

const tools = [
  {
    id: 1,
    name: "Password Generator",
    description: "Generate secure passwords with customizable options",
    category: "Security",
    icon: Key,
    color: "#ef4444", // red
  },
  {
    id: 2,
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your designs",
    category: "Utility",
    icon: FileText,
    color: "#8b5cf6", // purple
  },
  {
    id: 3,
    name: "JWT Decoder",
    description: "Decode and verify JSON Web Tokens",
    category: "Development",
    icon: Unlock,
    color: "#10b981", // green
  },
];

const Popup = (props: Props) => {
  return (
    <>
      <header className="px-5 py-3 border-b">
        <h1 className="text-xl font-bold">ToolForge</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Your development toolkit
        </p>
      </header>

      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search tools..." className="pl-10 w-full" />
        </div>

        <div className="space-y-3">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card
                key={tool.id}
                className="cursor-pointer hover:shadow-md transition-shadow py-0"
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: tool.color }}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0">
                        <h3 className="font-semibold text-sm truncate">
                          {tool.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Popup;
