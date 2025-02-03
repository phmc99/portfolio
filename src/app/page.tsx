import { marcellus, prata, ubuntu } from "./fonts";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center gap-4 lg:w-1/2 max-w-[920px] lg:mx-auto">
      <h1 className={`${ubuntu.className} text-left text-4xl`}>Pedro Costa</h1>
      <p className={`${prata.className} text-lg`}>
        Resolvendo problemas e construindo o futuro com a tecnologia.
      </p>
      <p className={`${marcellus.className} text-base/6`}>
        <span className="font-bold">
          Desenvolvedor Full Stack com 4 anos de experiência.
        </span>{" "}
        Os setores em que tenho mais conhecimento são <u>e-commerces</u> e{" "}
        <u>SaaS</u>. Já tive a oportunidade de construir desde o protótipo até a
        publicação, além de adicionar novas funcionalidades, realizar manutenção
        e oferecer suporte ao cliente para esses tipos de sistema.
      </p>
    </div>
  );
}
