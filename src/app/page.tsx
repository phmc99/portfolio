import ColumnScroller from "@/components/ColumnScroller";
import { marcellus, prata, ubuntu } from "./fonts";
import Craft from "@/components/Craft";
import Link from "next/link";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-center gap-2 lg:w-1/2 max-w-[920px] lg:mx-auto px-6 pt-20 pb-10 md:px-16 lg:px-0">
        <h1 className={`${marcellus.className} text-2xl md:text-3xl`}>
          Pedro Costa
        </h1>
        <p className={`${prata.className} text-sm md:text-base text-zinc-400`}>
          Resolvendo problemas e construindo o futuro com a tecnologia.
        </p>
        <p className={`${ubuntu.className} text-sm/6 md:text-base/6 mt-4`}>
          <span className="font-bold">
            Desenvolvedor Full Stack com 4 anos de experiência.
          </span>{" "}
          Os setores em que tenho mais conhecimento são e-commerces e SaaS. Já
          tive a oportunidade de construir desde o protótipo até a publicação,
          além de adicionar novas funcionalidades, realizar manutenção e
          oferecer suporte ao cliente para esses tipos de sistema.
        </p>
      </section>

      <section className="px-0 lg:w-1/2 max-w-[920px] lg:mx-auto">
        <ColumnScroller columns={[Craft, Projects, Craft]} />
      </section>

      <section className="flex flex-col  justify-center gap-4 lg:w-1/2 max-w-[920px] lg:mx-auto px-6 pt-20 pb-10 md:px-16 lg:px-0">
        <h3 className={`${marcellus.className} text-lg md:text-xl`}>Agora</h3>
        <p className={`${ubuntu.className} text-sm/6 md:text-base/6`}>
          Procurando desenvolver minhas habilidades resolvendo problemas,
          explorando tecnologias e interesses, entregando isso com qualidade.
          Sabendo que{" "}
          <span className={`underline underline-offset-4 decoration-zinc-600`}>
            tudo ao meu redor é o trabalho da vida de alguém
          </span>
          .
        </p>
        <p className={`${ubuntu.className} text-sm md:text-base`}>
          Tudo que eu quero é construir e melhorar sistemas. APIs, Front-ends,
          Webhooks, Apps, etc. A programação tem infinitas oportunidades de
          criar e sinto que ainda tenho muita coisa para experimentar.
        </p>
        <p className={`${ubuntu.className} text-sm/6 md:text-base/6`}>
          Um pouco sobre mim. Sou praticante de Jiu-jitsu e Judô, já fui
          competidor de ambos por algum tempo, também tive uma fase como
          professor e gosto bastante da filosofia por trás dessas artes. Também
          gosto de musculação, considero um complemento aos meus treinos de luta
          e me sinto bem ao fazer.{" "}
          <span className={`${prata.className} text-zinc-700`}>
            Pratiquem esporte, bebam água e comam bem hahahaha
          </span>
        </p>
      </section>

      <section className="flex flex-col  justify-center gap-4 lg:w-1/2 max-w-[920px] lg:mx-auto px-6 pt-4 pb-10 md:px-16 lg:px-0">
        <h3 className={`${marcellus.className} text-lg md:text-xl`}>
          Conecte-se
        </h3>
        <p className={`${ubuntu.className} text-sm md:text-base`}>
          Entre em contato comigo pelo{" "}
          <Link
            className="underline underline-offset-2 decoration-zinc-600"
            href={"https://www.linkedin.com/in/phmc99/"}
            target="__blank"
          >
            LinkedIn
          </Link>{" "}
          ou{" "}
          <Link
            className="underline underline-offset-2 decoration-zinc-600"
            href={"https://x.com/pedrocostv"}
            target="__blank"
          >
            X
          </Link>
        </p>
      </section>
    </main>
  );
}
