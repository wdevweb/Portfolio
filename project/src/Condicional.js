import {useState} from 'react'
 

export default function Condicional() {

    const [email, setEmail] = useState()
    const [useremail, setUseremail] = useState()
    
    function enviarEmail(e) {
        e.preventDefault()
        setUseremail(email)
    }

    function limparemail(e) {
        setUseremail('')
    }

    return(

        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} /> <br/> 
                <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
            </form>
        {useremail &&(
                <div>
                    <p>o email do usuário é {useremail}</p>
                </div>
        )}
                <button onClick={limparemail}>Limpar e-mail</button>
        </div>

    )
}