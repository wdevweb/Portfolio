export default function Saudacao({nome}){
    
    function gerarsaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem ?`
    }

    return(

        <>
            {nome && <p>{gerarsaudacao(nome)}</p>}
        </>
    )
}