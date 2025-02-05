import { ubuntu } from "@/app/fonts";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function Experiences() {
  return (
    <div className="w-[80vw] max-w-64 lg:w-[99%] border-solid">
      <h6 className="text-sm text-zinc-500">Por onde passei</h6>
      <div className="py-3"></div>
      <div className="flex items-center gap-1">
        <Link
          href="https://www.hopesolution.com.br/"
          target="__blanl"
          className="text-lg underline underline-offset-2 decoration-zinc-600"
        >
          Hope Solution
        </Link>
        <LiaExternalLinkAltSolid className="text-zinc-500" />
      </div>

      <div className="py-0.5"></div>
      <p className={`${ubuntu.className} text-zinc-400 text-sm`}>
        O Software Mais Vidas foi desenvolvido para o âmbito da atenção
        domiciliar e contempla todas as necessidades para a Gestão do seu Home
        Care.
      </p>

      <div className="py-3"></div>
      <div className="flex items-center gap-1">
        <Link
          href="https://dropar.com.br/onde-estamos"
          target="__blanl"
          className="text-lg underline underline-offset-2 decoration-zinc-600"
        >
          Dropar Surf Club
        </Link>
        <LiaExternalLinkAltSolid className="text-zinc-500" />
      </div>

      <div className="py-0.5"></div>
      <p className={`${ubuntu.className} text-zinc-400 text-sm`}>
        Uma plataforma de compra, venda e aluguel de pranchas de surfe, com as
        melhores marcas e modelos do mercado.
      </p>
    </div>
  );
}
