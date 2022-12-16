import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { useRouter } from "next/router";
import { Pagination } from "@components/Pagination";
import { Publication } from "@components/Publication";
import { useEffect, useState } from "react";
import { MenuLayout } from "@layouts/variants";
import { paginate } from "@helpers/pagination";

export async function getStaticProps() {
  const filesInBlogs = fs.readdirSync("./content/blog/");
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blog/${filename}`, "utf8");
    const matterData = matter(file);
    return {
      ...matterData.data,
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { index: ["1"] } }],
    fallback: "blocking",
  };
};

Page.getLayout = MenuLayout;
export default function Page({ blogs }) {
  const publicationsPerPage = 5;
  const router = useRouter();
  const pageIndex = router.query["index"];
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const pages = paginate(blogs, publicationsPerPage);
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
            <Link href={["/blog/", publication.slug].join("")} key={indice}>
              <Publication banner={publication.banner} title={publication.title} description={publication.description} createdAt={publication.date} tags={publication?.tags} />
            </Link>
          );
        })}
        <Pagination total={total} currentIndice={pageIndex} />
      </div>
    </div>
  );
}
