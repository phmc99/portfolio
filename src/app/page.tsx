import ColumnScroller from "@/components/ColumnScroller";
import { marcellus } from "./fonts";
import Craft from "@/components/Craft";
import Link from "next/link";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import SideMenuHome from "@/components/SideMenu/SideMenuHome";

export default function Home() {
  return (
    <main>
      <SideMenuHome />
      <section className="flex flex-col justify-center gap-2 lg:w-1/2 max-w-[920px] lg:mx-auto px-6 pt-20 pb-10 md:px-16 lg:px-0">
        <div className="flex gap-4">
          <figure className="hidden lg:block">
            <Image
              src="https://github.com/phmc99.png"
              className="rounded-full"
              alt="Pedro's Photo"
              height={512}
              width={512}
              loading="lazy"
              quality={100}
            />
          </figure>
          <div className="flex flex-col">
            <h1 className={`${marcellus.className} text-2xl md:text-3xl`}>
              Pedro Costa
            </h1>
            <p
              className={`text-sm md:text-base text-zinc-500 dark:text-zinc-400`}
            >
              Resolvendo problemas e construindo o futuro com a tecnologia.
            </p>
            <p className={`text-sm/6 md:text-base/6 mt-4`}>
              <span className="font-bold">
                Desenvolvedor Full Stack com 4 anos de experiência.
              </span>{" "}
              Os setores em que tenho mais conhecimento são e-commerces e SaaS.
              Já tive a oportunidade de construir desde o protótipo até a
              publicação, além de adicionar novas funcionalidades, realizar
              manutenção e oferecer suporte ao cliente para esses tipos de
              sistema.
            </p>
          </div>
        </div>
      </section>

      <section className="px-0 lg:w-1/2 max-w-[920px] lg:mx-auto">
        <ColumnScroller columns={[Craft, Projects, Experiences]} />
      </section>

      <section className="flex flex-col  justify-center gap-4 lg:w-1/2 max-w-[920px] lg:mx-auto px-6 pt-20 pb-10 md:px-16 lg:px-0">
        <h3 className={`${marcellus.className} text-lg md:text-xl`}>
          Detalhes
        </h3>
        <p className={`text-sm/6 md:text-base/6`}>
          Estou procurando desenvolver minhas habilidades resolvendo problemas,
          explorando várias tecnologias e entregando valor por onde passo.
          Sabendo que{" "}
          <span className={`underline underline-offset-4 decoration-zinc-600`}>
            tudo ao meu redor é o trabalho da vida de alguém
          </span>
          .
        </p>
        <p className={`text-sm md:text-base`}>
          Tudo que eu quero é construir e melhorar sistemas. APIs, Front-ends,
          Webhooks, Apps, etc. A programação tem infinitas oportunidades de
          criar e sinto que ainda tenho muita coisa para experimentar e
          aprender.
        </p>
        {/* <p className={`text-sm/6 md:text-base/6`}>
          Um pouco sobre mim. Sou praticante de Jiu-jitsu e Judô, já fui
          competidor de ambos por algum tempo, também tive uma fase como
          professor e gosto bastante da filosofia por trás dessas artes. Também
          gosto de musculação, considero um complemento aos meus treinos de luta
          e me sinto bem ao fazer.{" "}
          <span className={`text-zinc-400 dark:text-zinc-700`}>
            Pratiquem esporte, bebam água e comam bem hahahaha
          </span>
        </p> */}
      </section>

      <section className="flex flex-col  justify-center gap-4 lg:w-1/2 max-w-[920px] lg:mx-auto px-6 pt-4 pb-10 md:px-16 lg:px-0">
        <h3 className={`${marcellus.className} text-lg md:text-xl`}>
          Conecte-se
        </h3>
        <p className={`text-sm md:text-base`}>Entre em contato comigo:</p>
        <div className="flex gap-4 items-center">
          <Link
            className="underline underline-offset-2 decoration-zinc-600"
            href={"https://www.linkedin.com/in/phmc99/"}
            target="__blank"
          >
            <FaLinkedinIn size={22} />
          </Link>{" "}
          <Link
            className="underline underline-offset-2 decoration-zinc-600"
            href={"https://x.com/pedrocostv"}
            target="__blank"
          >
            <BsTwitterX size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
