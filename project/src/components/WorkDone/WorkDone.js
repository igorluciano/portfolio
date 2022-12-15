import Image from "next/image";
export function WorkDone({ createdIn, title, description, categorys }) {
  return (
    <div className="workdone border-effect__wrapper border-effect__target">
      <div className="workdone__content  border-effect__content">
        <div className="p-6">
          <div className="workdone__date">{createdIn}</div> <div className="workdone__title ">{title}</div>
          <div className="workdone__description">{description}</div>
        </div>
      </div>
    </div>
  );
}

export function s1({ banner, title, description, categorys }) {
  return (
    <div className="flex flec-row gap-4">
      {" "}
      <div className="workdone border-effect__wrapper border-effect__target">
        <div className="workdone__content  border-effect__content">
          {" "}
          <Image className="workdone__banner" src={banner} alt={title} width={250} />
          <div className="workdone__informations">
            <div className="workdone__date">2022</div>
            <div className="workdone__title ">{title}</div>
            <div className="workdone__description">Cliente: IFSULDEMINAS</div>
            <div className="workdone__description">Serviços: UI Design, UX Design e Desenvolvimento Frontend</div>
            <div className="workdone__description">
              Site: <a href="5">sou.ifsuldeminas.edu.br</a>
            </div>
            <div className="workdone__description">{description}</div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
