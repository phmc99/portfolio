import { ubuntu } from "@/app/fonts";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

interface IColumnScrollerItem {
  isLink: boolean;
  href?: string;
  title: string;
  target?: string;
  description: string;
}

export default function ColumnScrollerItem({
  isLink,
  href,
  title,
  target = "_blank",
  description,
}: IColumnScrollerItem) {
  return (
    <>
      <div className="py-3"></div>
      {isLink ? (
        <div className="flex items-center gap-1">
          <Link
            href={href || "#"}
            target={target}
            className="text-lg underline underline-offset-2 decoration-zinc-600"
          >
            {title}
          </Link>
          {target === "_blank" ? (
            <LiaExternalLinkAltSolid className="text-zinc-500" />
          ) : null}
        </div>
      ) : (
        <h2 className="text-lg underline underline-offset-2 decoration-zinc-600">
          {title}
        </h2>
      )}
      <div className="py-0.5"></div>
      <p className={`${ubuntu.className} text-zinc-400 text-sm`}>
        {description}
      </p>
    </>
  );
}
