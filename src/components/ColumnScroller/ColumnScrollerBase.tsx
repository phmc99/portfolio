import { ReactNode } from "react";

interface IColumnBase {
  children: ReactNode;
}

export default function ColumnScrollerBase({ children }: IColumnBase) {
  return <div className="w-full flex flex-col">{children}</div>;
}
