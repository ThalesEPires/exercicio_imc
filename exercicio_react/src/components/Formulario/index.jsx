import { useState } from "react";

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [mensagem, setMensagem] = useState("");

    const calculaIMC = () => {
        const alturaEmMetros = altura / 100;
        const resultado = (alturaEmMetros * alturaEmMetros) / peso;

        if (resultado <=18.4) {
            setMensagem("Você está abaixo do peso ideal")
        } else if (resultado >=15.5 && resultado <=24.9) {
            setMensagem("Você com o peso ideal")
        } else if (resultado >=25 && resultado <=29.9) {
            setMensagem("Você está um pouco acima do peso ideal")
        } else if (resultado >=30 && resultado <=34.9) {
            setMensagem("Você está bastante acima do peso ideal")
        } else if (resultado >=35 && resultado <=40) {
            setMensagem("Você está muito acima do peso ideal")
        } else if (resultado >40) {
            setMensagem("Você está no último nível de obesidade, tome cuidado")
        }
    }

    return (
        <form>
            <input
                type="number"
                placeholder="Altura (cm)"
                value={altura}
                onChange={(evento) => setAltura(evento.target.value)}
            />
            <input
                type="number"
                placeholder="Peso (kg)"
                value={peso}
                onChange={(evento) => setPeso(evento.target.value)}
            />
            <button type="button" onClick={calculaIMC}>
                Calcular
            </button>
            {mensagem && <p>{mensagem}</p>}
        </form>
    );
};
export default Formulario;