export function Publication({ title, description, createdAt, tags }) {
  return (
    <div className="publication border-effect__wrapper border-effect__target">
      <div className="publication__content border-effect__content">
        <div className="publication__header">
          <div className="publication__date">{createdAt}</div>
          <div className="publication__tags">
            {tags &&
              tags.map((tag, indice) => {
                return (
                  <span className="publication__tag" key={indice}>
                    #{tag}
                  </span>
                );
              })}
          </div>
        </div>

        <div className="publication__title ">{title}</div>
        <div className="publication__description">{description}</div>
      </div>
    </div>
  );
}
