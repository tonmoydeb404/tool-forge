import { TTool } from "@/types/tool";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type Props = {
  data: TTool;
  onClick: () => void;
};

const ToolCard = (props: Props) => {
  const { data: tool, onClick } = props;
  const IconComponent = tool.icon;
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow duration-200 p-0"
      onClick={onClick}
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
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm truncate">{tool.name}</h3>
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
};

export default ToolCard;
