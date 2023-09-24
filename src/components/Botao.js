

export function Botao(props) {
    return (
        <button onClick={(e) => {
            e.preventDefault()
            //Valida(email, password)
        }} className="botaoEntrar">{props.texto}</button>
    )
}