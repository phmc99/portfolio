import ColumnScroller from "@/components/ColumnScroller";
import { marcellus, prata, ubuntu } from "./fonts";
import Craft from "@/components/Craft";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col  justify-center gap-4 lg:w-1/2 max-w-[920px] lg:mx-auto px-6 pt-20 pb-10 md:px-16 lg:px-0">
        <h1 className={`${marcellus.className} text-2xl md:text-3xl`}>
          Pedro Costa
        </h1>
        <p className={`${prata.className} text-sm md:text-base`}>
          Resolvendo problemas e construindo o futuro com a tecnologia.
        </p>
        <p className={`${ubuntu.className} text-sm/6 md:text-base/6`}>
          <span className="font-bold">
            Desenvolvedor Full Stack com 4 anos de experiência.
          </span>{" "}
          Os setores em que tenho mais conhecimento são <u>e-commerces</u> e{" "}
          <u>SaaS</u>. Já tive a oportunidade de construir desde o protótipo até
          a publicação, além de adicionar novas funcionalidades, realizar
          manutenção e oferecer suporte ao cliente para esses tipos de sistema.
        </p>
      </div>
      <section className="px-0 lg:w-1/2 max-w-[920px] lg:mx-auto">
        <ColumnScroller columns={[Craft, Craft, Craft]} />
      </section>
    </main>
  );
}
