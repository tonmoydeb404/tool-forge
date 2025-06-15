import ToolCard from "@/components/cards/tool-card";
import { Input } from "@/components/ui/input";
import { tools } from "@/db/tools";
import { Search } from "lucide-react";

type Props = {};

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
            return <ToolCard key={tool.key} data={tool} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Popup;
