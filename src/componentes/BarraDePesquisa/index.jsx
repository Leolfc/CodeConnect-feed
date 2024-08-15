import { useState } from "react";
import "./style.css";//!SEMPRE IMPORTAR CSS NO INDES.JSX
export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  console.log(termoPesquisa)
  return (
    <input
      className="barra-pesquisa"
      type="search"
      placeholder="Digite o que você procura"
    value={termoPesquisa} onChange={(evento)=> setTermoPesquisa(evento.target.value)} />
  );
}
