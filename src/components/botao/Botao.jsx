import "../botao/botao.css"

// eslint-disable-next-line react/prop-types
export function Botao({click, text}){
    return(
        <button onClick={(event)=>{
            event.preventDefault()
            click()
        }}>{text}</button>
    )
}