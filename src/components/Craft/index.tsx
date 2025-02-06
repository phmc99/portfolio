import ColumnScrollerListItem from "../ColumnScrollerListItem";
import ColumnScrollerItem from "../ColumnScrollerListItem/ColumnScrollerItem";

export default function Craft() {
  return (
    <ColumnScrollerListItem title="Construindo">
      <ColumnScrollerItem
        isLink={false}
        title="Craft"
        description="Pequenas implementações de interfaces e interações"
      />
    </ColumnScrollerListItem>
  );
}
