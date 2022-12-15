import photo from "@assets/photo.jpg";
import Image from "next/image";
import { useState } from "react";
export function Menu() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="block my-2 bg-color-primary" onClick={() => setShow(true)}>
        abrir
      </button>
      <div className={[show ? "transition-opacity ease-in duration-700 opacity-100" : "hidden ", "flex flex-col bg-color-gray justify-center h-screen"].join(" ")}>
        <button onClick={() => setShow(false)}>fechar</button>
        <div className="flex flex-col">
          <Image className="mx-auto  rounded-full" src={photo} alt="te" width={120} />
          <span className="mx-auto">Igor Moreira</span>
        </div>
        <button className="block border p-3 rounded-full w-[400px] mx-auto my-3">Sobre</button>
        <button className="block border p-3 rounded-full w-[400px] mx-auto my-3">Linkedin</button>
        <button className="block border p-3 rounded-full w-[400px] mx-auto my-3">Github</button>
        <button className="block border p-3 rounded-full w-[400px] mx-auto my-3">Blog</button>
        <button className="block border p-3 rounded-full w-[400px] mx-auto my-3">Trabalhos</button>
      </div>
    </>
  );
}
