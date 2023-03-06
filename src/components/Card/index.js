import { useState } from "react";
import Button from '../Button'


const Card = () => {

    const [valor, setValor] = useState(0)

    {/* Função Adicionar */}
    function Adicionar(){
        setValor(valor + 1)
    }

    {/* Função Remover */}
    function Remover(){
        setValor(valor - 1)
    }

    return(
        <div className="card">
            <div className="card-header">
                Contador
            </div>

            <div className="card-body">
                {/* Botão Adicionar */}
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>

                {/* Botão Remover */}
                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>

                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;
