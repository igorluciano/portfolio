import { WorkDone } from "@components/WorkDone";
import { menuLayout } from "@layouts/variants";
import { allWorks } from "src/data/works";

Portfolio.getLayout = menuLayout;
export default function Portfolio() {
  return (
    <div>
      <h1 className="section">Portfólio</h1>
      <hr className="divider" />
      <div className="content">
        <div className="portfolio">
          {allWorks.map((work, indice) => (
            <WorkDone key={indice} createdIn={work.createdIn} title={work.title} description={work.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
