import { LucideProps } from "lucide-react";

export type TToolIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

export type TTool = {
  key: string;
  name: string;
  description: string;
  category: string;
  icon: TToolIcon;
  color: string;
};
