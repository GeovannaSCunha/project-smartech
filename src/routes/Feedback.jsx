import { StyledFeed } from "../components/Styles";
import { useState } from "react";

export default function Avalia() {
  //Rastreio os valores do formulário
  const [formData, setFormData] = useState({
    zona: "",
    transporte: [],
    linha: "",
    obs: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          transporte: [...formData.transporte, value],
        });
      } else {
        setFormData({
          ...formData,
          transporte: formData.transporte.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <StyledFeed>
      <form onSubmit={handleSubmit}>
        <h4>Qual a região em que você reside?</h4>
       <input type="text" className= "input" placeholder="Central, Sul, Norte, Oeste"/>
        
        <h4>Qual o meio de transporte que você mais utiliza?</h4>
        <input type="text" className="input" placeholder="Ônibus, Trem, Metrô, Bicicleta" />
        
        <h4>Qual a linha que você mais utiliza?</h4>
        <input type="text" className="input" placeholder="Linha" />
        
    
        <h5>Registre aqui suas sugestões, elogio e reclamações</h5>
        <input type="text" className="input" placeholder="" />

        <button type="submit">Enviar</button>
        <Link to="/Login">
          <button>Voltar</button>
        </Link>
      </form>
    </StyledFeed>
  );
}
