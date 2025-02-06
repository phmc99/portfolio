import { ReactNode } from "react";

interface IColumnScrollerListItem {
  title: string;
  children: ReactNode;
}

export default function ColumnScrollerListItem({
  title,
  children,
}: IColumnScrollerListItem) {
  return (
    <div className="w-[80vw] max-w-64 lg:w-[99%] border-solid">
      <h6 className="text-sm text-zinc-500">{title}</h6>
      {children}
    </div>
  );
}
