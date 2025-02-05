import { ubuntu } from "@/app/fonts";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function Projects() {
  return (
    <div className="w-[80vw] max-w-64 lg:w-[99%] border-solid">
      <h6 className="text-sm text-zinc-500">Projetos</h6>
      <div className="py-3"></div>
      <div className="flex items-center gap-1">
        <Link
          href="https://github.com/phmc99/find-a-friend"
          target="__blanl"
          className="text-lg underline underline-offset-2 decoration-zinc-600"
        >
          Rest API
        </Link>
        <LiaExternalLinkAltSolid className="text-zinc-500" />
      </div>

      <div className="py-0.5"></div>
      <p className={`${ubuntu.className} text-zinc-400 text-sm`}>
        API conta com CRUD, Autenticação JWT, Testes unitários, ORM, Design
        Patterns e muito mais. A interação dela é entre organizações e pets para
        adoção.
      </p>

      <div className="py-3"></div>
      <div className="flex items-center gap-1">
        <Link
          href="https://github.com/phmc99/fast-chat"
          target="__blanl"
          className="text-lg underline underline-offset-2 decoration-zinc-600"
        >
          Fast Chat
        </Link>
        <LiaExternalLinkAltSolid className="text-zinc-500" />
      </div>

      <div className="py-0.5"></div>
      <p className={`${ubuntu.className} text-zinc-400 text-sm`}>
        POC de um chat em tempo real utilizando WebSockets, Docker, Autenticação
        JWT, ORM e muito Javascript.
      </p>

      <div className="py-3"></div>
      <div className="flex items-center gap-1">
        <Link
          href="https://github.com/phmc99/yumi-store"
          target="__blanl"
          className="text-lg underline underline-offset-2 decoration-zinc-600"
        >
          Yumi Store
        </Link>
        <LiaExternalLinkAltSolid className="text-zinc-500" />
      </div>

      <div className="py-0.5"></div>
      <p className={`${ubuntu.className} text-zinc-400 text-sm`}>
        Front-end de um e-commerce feito junto com um grupo de amigos, onde
        dividimos posições e tarefas. Foi uma experiência ótima para desenvolver
        as soft-skills.
      </p>
    </div>
  );
}
