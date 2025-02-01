import { marcellus, prata, ubuntu } from "./fonts";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:w-1/2 max-w-[920px] lg:mx-auto">
      <h1 className={ubuntu.className}>Pedro Costa</h1>
      <p className={prata.className}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        perferendis expedita nobis. Distinctio qui obcaecati cumque ut corporis.
        Officia inventore repudiandae alias totam eaque quis dolorum nesciunt
        quam excepturi sint.
      </p>
      <p className={marcellus.className}>
        Click (Generate) to create a new font pairing, (Lock) to lock fonts that
        you want to keep, and (Edit) to choose a font manually. The text is
        editable, try replacing it with your company name or other copy. The
        goal of font pairing is to select fonts that share an overarching theme
        yet have a pleasing contrast. Which fonts work together is largely a
        matter of intuition, but we approach this problem with a neural net. See
        Github for more technical details.
      </p>
    </div>
  );
}
