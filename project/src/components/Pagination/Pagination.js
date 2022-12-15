import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function Pagination({ total, currentIndice }) {
  const prox = parseInt(currentIndice) + 1;
  const prev = parseInt(currentIndice) - 1;
  return (
    <div className="pagination">
      {prev > 0 && (
        <Link href={["/blog/page/", prev].join("")}>
          <div className="pagination__action">
            <FaArrowLeft /> Anterior
          </div>
        </Link>
      )}
      <div className="pagination__indication">
        Página {currentIndice} de {total}
      </div>
      {prox <= total && (
        <Link href={["/blog/page/", prox].join("")}>
          <div className="pagination__action">
            Próxima <FaArrowRight />
          </div>
        </Link>
      )}
    </div>
  );
}
