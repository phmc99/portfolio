"use client";

import ColumnScroller from "@/components/ColumnScroller";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import { prata, ubuntu } from "../fonts";
import { TbArrowBackUp } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Craft() {
  const router = useRouter();

  function handleBackToHome() {
    return router.push("/");
  }

  return (
    <main className="lg:flex lg:gap-20 lg:w-1/2 max-w-[920px] lg:mx-auto">
      <section className="pt-14 lg:py-14 px-6  pb-10 md:px-16 lg:px-0">
        <div
          className="flex gap-2 items-center text-zinc-400 cursor-pointer"
          onClick={handleBackToHome}
        >
          <TbArrowBackUp size={20} />
          <p className={`${prata.className}`}>Home</p>
        </div>
      </section>
      <section className="flex flex-col px-6 pt-4 lg:pt-14 pb-10 md:px-16 lg:px-0">
        <div className="pb-14">
          <h2 className="text-lg">Craft</h2>
          <div className="py-0.5"></div>
          <p className={`${ubuntu.className} text-zinc-400`}>
            Pequenas implementações de interfaces e interações
          </p>
        </div>
        <ColumnScroller columns={[Projects, Experiences, Experiences]} />
      </section>
    </main>
  );
}
