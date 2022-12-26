import React, {useState} from 'react';
import '../static/LoginPage.css'
import {useHistory} from "react-router";


export function LoginPage() {
    const history = useHistory()
    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');

    function Login() {
        const ob = {
            username: log,
            password: pass,
        }
        fetch('/api/authorize/', {
            method: "post",
            body: JSON.stringify(ob),
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('user_id', res[1])
                localStorage.setItem('user_login', log)
                localStorage.setItem('user_status', res[0])
                if (res[0]) {
                    //window.location.replace("/models/managers")
                    history.push('/models/managers')
                }
                else{
                    //window.location.replace("/")
                    history.push('/')
                }
            })
            .catch(function (reason) {
                console.log(reason)
                //window.location.replace("/login")
                history.push('/login')
            })
        }

    return (
        <div className="register-block">
            <h1 className="title-block">
                    Войти
            </h1>
            <form className="form-block">
                    <div className="mb-2">
                        <label
                            htmlFor="login"
                            className="text-block33"
                        >
                            Логин
                        </label>
                        <input
                            type="login"
                            onChange={(event) => setLog(event.target.value)}
                            value={log}
                            className="input-block33"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="text-block33"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            onChange={(event) => setPass(event.target.value)}
                            value={pass}
                            className="input-block33"
                        />
                    </div>
                </form>
                <div className="mt-6">
                    <button
                        className="action-block33"
                        onClick={() => Login()}
                    >
                        Войти
                    </button>
                </div>

            <p className="repage-block">
                    {" "}
                    Отсутствует аккаунт?{" "}
                    <a
                        href="/registration"
                        className="font-medium text-indigo-600 text-xl hover:underline"
                    >
                        Зарегестрироваться
                    </a>
                </p>
        </div>
    );
}