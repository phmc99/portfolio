import ColumnScrollerListItem from "../ColumnScrollerListItem";
import ColumnScrollerItem from "../ColumnScrollerListItem/ColumnScrollerItem";

export default function Projects() {
  return (
    <ColumnScrollerListItem title="Projetos">
      <ColumnScrollerItem
        isLink={true}
        href="https://github.com/phmc99/find-a-friend"
        title="Rest API"
        description="API conta com CRUD, Autenticação JWT, Testes unitários, ORM, Design
        Patterns e muito mais. A interação dela é entre organizações e pets para
        adoção."
      />

      <ColumnScrollerItem
        isLink={true}
        href="https://github.com/phmc99/fast-chat"
        title="Fast Chat"
        description="POC de um chat em tempo real utilizando WebSockets, Docker, Autenticação
        JWT, ORM e muito Javascript."
      />

      <ColumnScrollerItem
        isLink={true}
        href="https://github.com/phmc99/yumi-store"
        title="Yumi Store"
        description="Front-end de um e-commerce feito junto com um grupo de amigos, onde
        dividimos posições e tarefas. Foi uma experiência ótima para desenvolver
        as soft-skills."
      />
    </ColumnScrollerListItem>
  );
}
