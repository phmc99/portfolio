import ColumnScrollerListItem from "../ColumnScrollerListItem";
import ColumnScrollerItem from "../ColumnScrollerListItem/ColumnScrollerItem";

export default function Experiences() {
  return (
    <ColumnScrollerListItem title="Por onde passei">
      <ColumnScrollerItem
        isLink={true}
        href="https://www.hopesolution.com.br/"
        title="Hope Solution"
        description="O Software Mais Vidas foi desenvolvido para o âmbito da atenção
        domiciliar e contempla todas as necessidades para a Gestão do seu Home
        Care."
      />

      <ColumnScrollerItem
        isLink={true}
        href="https://dropar.com.br/onde-estamos"
        title="Dropar Surf Club"
        description="Uma plataforma de compra, venda e aluguel de pranchas de surfe, com as
        melhores marcas e modelos do mercado."
      />
    </ColumnScrollerListItem>
  );
}
