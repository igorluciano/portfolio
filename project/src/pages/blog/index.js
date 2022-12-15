import { menuLayout } from "@layouts/variants";
import { allPublications } from "src/data/publications";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
Sobre.getLayout = menuLayout;
export default function Sobre() {
  const publication = allPublications[0];
  return (
    <div>
      <Link href="/blog/page/1">
        <div className="navigation">
          <FaArrowLeft /> Retornar para a listagem
        </div>
      </Link>

      <h1 className="section">{publication?.title}</h1>
      <hr className="divider" />
      <div className="content">
        <p>Olá, meu nome é Igor e eu nasci em Minas Gerais no ano de 1996. Sou formado como Técnico em Informática pelo Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas e mais recentemente me graduei como Tecnólogo em Redes de Computadores nessa mesma instituição.</p>
      </div>
    </div>
  );
}
