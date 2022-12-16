import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { MenuLayout } from "@layouts/variants";
import { FaArrowLeft } from "react-icons/fa";

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(fs.readFileSync(`./content/blog/${slug}.md`, "utf8"));
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;
  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blog");
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: [filename] } };
  });
  return {
    paths,
    fallback: false,
  };
}

Blog.getLayout = MenuLayout;
export default function Blog({ post, markdown }) {
  const publication = post;

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
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
