import ToolCard from "@/components/cards/tool-card";
import { Input } from "@/components/ui/input";
import { tools } from "@/db/tools";
import { TTool } from "@/types/tool";
import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
  openTool: (tool: TTool) => void;
  selectedTool: TTool | null;
};

const ListSection = (props: Props) => {
  const { openTool, selectedTool } = props;

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`transition-transform duration-300 ease-in-out overflow-hidden ${
        selectedTool ? "-translate-x-full -ml-[100%]" : "translate-x-0"
      }`}
    >
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search tools..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        {filteredTools.map((tool: TTool) => (
          <ToolCard key={tool.key} data={tool} onClick={() => openTool(tool)} />
        ))}
      </div>
    </div>
  );
};

export default ListSection;
