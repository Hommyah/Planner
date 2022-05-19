import React, {useState} from "react";
import "./auth.css"

const Auth = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const NameVal = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    },[])

    const PasswordVal = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    },[])

    const Clicker = () => {
      setPassword('')
        setName('')
    }

    return (
    <div className='auth_form'>
        <div className='auth_text'>Авторизация</div>
        <input onChange={NameVal} value={name} className='name' placeholder="Имя пользователя"/>
        <input onChange={PasswordVal} value={password} className='password' placeholder="Пароль"/>
        <button onClick={Clicker} className="open">Войти</button>
    </div>
    )
}

export default Auth