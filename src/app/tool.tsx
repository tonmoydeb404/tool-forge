import tools from "@/tools";
import { TTool } from "@/types/tool";

type Props = {
  selectedTool: null | TTool;
};

const ToolSection = (props: Props) => {
  const { selectedTool } = props;

  const Component = selectedTool
    ? tools[selectedTool.key as keyof typeof tools]
    : undefined;

  return (
    <div
      className={`absolute inset-0 p-4 transition-transform duration-300 ease-in-out overscroll-y-auto ${
        selectedTool ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {selectedTool ? <>{Component ? <Component /> : <div></div>}</> : null}
    </div>
  );
};

export default ToolSection;

// ----------------------------------------------------------------------
