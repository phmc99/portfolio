export default function Footer() {
  return (
    <footer className="w-full border-solid border-t-[1px] border-zinc-800">
      <div className="flex justify-between lg:w-1/2 max-w-[920px] lg:mx-auto px-6 py-4 md:px-16 lg:px-0 text-sm">
        <p>Uma frase legal</p>
        <div className="flex gap-4">
          <p>ano</p>
          <p>relogio</p>
        </div>
      </div>
    </footer>
  );
}
