import { menuLayout } from "@layouts/variants";

Sobre.getLayout = menuLayout;
export default function Sobre() {
  return (
    <div>
      <h1 className="section">Sobre</h1>
      <hr className="divider" />
      <div className="content">
        <p>Informações sobre</p>
      </div>
    </div>
  );
}
