import { useState } from 'react'

function Form() {
function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(`O usuário ${name} foi cadastrado com a senha: ${password}`)
}

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Diga o seu nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Diga a sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form