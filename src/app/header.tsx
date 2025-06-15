import { Button } from "@/components/ui/button";
import { TTool } from "@/types/tool";
import { ArrowLeft } from "lucide-react";

type Props = {
  selectedTool: TTool | null;
  closeTool: () => void;
};

const HeaderSection = (props: Props) => {
  const { selectedTool, closeTool } = props;
  return (
    <header className="px-5 py-3 border-b">
      <div className="flex items-center gap-3">
        {selectedTool && (
          <Button variant="ghost" size="sm" onClick={closeTool}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
        )}
        <div>
          <h1 className="text-xl font-bold">
            {selectedTool ? selectedTool.name : "ToolForge"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {selectedTool
              ? selectedTool?.description
              : "Your development toolkit"}
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
