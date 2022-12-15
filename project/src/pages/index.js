import { LinktreeLayout } from "@layouts/variants";
import { FaGithub, FaLinkedin, FaRegImage, FaChild, FaNewspaper } from "react-icons/fa";
import Link from "next/link";
import photo from "@assets/photo.jpg";
import Image from "next/image";

Home.getLayout = LinktreeLayout;
export default function Home() {
  return (
    <div className="linktree">
      <div className="linktree__content">
        <div className="bio">
          <Image className="bio__photo" src={photo} alt="Igor Moreira" width={115} />
          <span className="bio__name">Igor Moreira</span>
        </div>
        <div className="linktree__links">
          <Link href="/sobre">
            <span className="linktree__item">
              <FaChild /> Sobre
            </span>
          </Link>
          {/* <Link href="/portfolio">
            <span className="linktree__item">
              <FaRegImage /> Portfólio
            </span>
          </Link> */}
          <Link href="/blog/page/1">
            <span className="linktree__item">
              <FaNewspaper /> Blog
            </span>
          </Link>
        </div>
        <div className="sites">
          <button className="sites__item">
            <a href="https://github.com/igorluciano" title="Abrir Github">
              <FaGithub />
            </a>
          </button>
          <button className="sites__item">
            <a href="https://www.linkedin.com/in/igorluciano/" title="Abrir Linkedin">
              <FaLinkedin />
            </a>
          </button>
        </div>
      </div>
      <div className="linktree__footer">Igor Moreira - 2022</div>
    </div>
  );
}
