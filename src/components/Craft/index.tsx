import { ubuntu } from "@/app/fonts";

export default function Craft() {
  return (
    <div className="w-[80vw] max-w-64 lg:w-[99%] border-solid">
      <h6 className="text-sm text-zinc-500">Construindo</h6>
      <div className="py-3"></div>
      <h2 className="text-lg underline underline-offset-2 decoration-zinc-600">
        Craft
      </h2>
      <div className="py-0.5"></div>
      <p className={`${ubuntu.className} text-zinc-400`}>
        Pequenas implementações de interfaces e interações
      </p>
    </div>
  );
}
