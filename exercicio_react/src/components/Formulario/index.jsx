import { useState } from "react";

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const calculaIMC = (evento) => {
        const resultado = altura * altura / peso;

        const Tabela = () => {
            const abaixoDoPeso = resultado <=18.4;
            const pesoNormal = resultado >=15.5  <=24.9;
            const acimaDoPeso = resultado >=25 <=29.9;
            const obesidade1 = resultado >=30 <=34.9;
            const obesidade2 = resultado >=35 <=40;
            const obesidade3 = resultado >40;
        }

        if (abaixoDoPeso) {
            return (
                <p>Você está abaixo do peso ideal</p>
            )
        }
    }

    return (
        <form>
            <input type="number" placeholder="Altura" onChange={evento => setAltura(parseInt(evento.target.value))} />
            <input type="number" placeholder="Peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
            <button type="submit" onChange={calculaIMC}>Calcular</button>
        </form>
    )
}

export default Formulario;