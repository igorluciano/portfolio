import { useRouter } from "next/router";
import { Pagination } from "@components/Pagination";
import { Publication } from "@components/Publication";
import { allPublications } from "src/data/publications";
import { useEffect, useState } from "react";
import { MenuLayout } from "@layouts/variants";
import Link from "next/link";

const paginate = (items, itemsPerPage) => {
  const pageSize = Math.ceil(items.length / itemsPerPage);
  return Array.from({ length: pageSize }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
};

Page.getLayout = MenuLayout;
export default function Page() {
  const publicationsPerPage = 5;
  const router = useRouter();
  const pageIndex = router.query["index"];
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const pages = paginate(allPublications, publicationsPerPage);
    if (pageIndex && pageIndex != 0 && pageIndex <= pages.length) {
      setList(pages[pageIndex - 1]);
      setTotal(pages.length);
    }
  }, [pageIndex]);

  return (
    <div>
      <h1 className="section">Blog</h1>
      <hr className="divider" />
      <div className="content">
        {list?.map((publication, indice) => {
          return (
            <Link href="/blog" key={indice}>
              <Publication banner={publication.banner} title={publication.title} description={publication.description} createdAt={publication.createdAt} tags={publication.tags} />
            </Link>
          );
        })}
        <Pagination total={total} currentIndice={pageIndex} />
      </div>
    </div>
  );
}
