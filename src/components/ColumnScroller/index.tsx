import { ReactNode } from "react";
import ColumnScrollerBase from "./ColumnScrollerBase";

interface IColumnScroller {
  columns: Array<() => ReactNode>;
}

export default function ColumnScroller({ columns }: IColumnScroller) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-zinc-900 via-[#18181b9a] to-transparent backdrop-blur-xs lg:hidden"></div>
      <div className="flex gap-4 w-full overflow-x-scroll md:overflow-auto px-6 lg:px-0">
        {columns.map((Column, index) => (
          <ColumnScrollerBase key={`column-scoller-${index}`}>
            {<Column />}
          </ColumnScrollerBase>
        ))}
      </div>
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r to-zinc-900 [#18181b9a] from-transparent backdrop-blur-xs lg:hidden"></div>
    </div>
  );
}
