import { ReactNode } from "react";
import ColumnScrollerBase from "./ColumnScrollerBase";

interface IColumnScroller {
  columns: Array<() => ReactNode>;
}

export default function ColumnScroller({ columns }: IColumnScroller) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-r from-zinc-200 dark:from-zinc-900 via-zinc-200/80 dark:via-zinc-900/80 to-transparent backdrop-blur-xs lg:hidden"></div>
      <div className="flex gap-4 w-full overflow-x-scroll md:overflow-hidden px-6 lg:px-0">
        {columns.map((Column, index) => (
          <ColumnScrollerBase key={`column-scoller-${index}`}>
            {<Column />}
          </ColumnScrollerBase>
        ))}
      </div>
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-r to-zinc-200 dark:to-zinc-900 via-zinc-200/80 dark:via-zinc-900/80 from-transparent backdrop-blur-xs lg:hidden"></div>
    </div>
  );
}
