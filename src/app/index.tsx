import { TTool } from "@/types/tool";
import { useEffect, useState } from "react";
import HeaderSection from "./header";
import ListSection from "./list";
import ToolSection from "./tool";

type Props = {};

const App = (props: Props) => {
  const [selectedTool, setSelectedTool] = useState<TTool | null>(null);

  const openTool = (tool: TTool) => {
    setSelectedTool(tool);
  };

  const closeTool = () => {
    setSelectedTool(null);
  };

  useEffect(() => {
    const applyTheme = () => {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const theme = systemPrefersDark ? "dark" : "light";
      document.documentElement.className = theme;
    };

    applyTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", applyTheme);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
    };
  }, []);

  return (
    <>
      <HeaderSection closeTool={closeTool} selectedTool={selectedTool} />
      <div className="p-4 relative">
        <ListSection openTool={openTool} selectedTool={selectedTool} />
        <ToolSection selectedTool={selectedTool} />
      </div>
    </>
  );
};

export default App;
