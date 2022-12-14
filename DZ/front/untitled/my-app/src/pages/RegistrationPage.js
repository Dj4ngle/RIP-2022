import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../static/RegistrationPage.css'

function RegistrationPage() {
    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');

    function Create() {
        const ob = {
            username: log,
            email:mail,
            password1: pass,
            password2: pass,
        }
        fetch("http://127.0.0.1:8000/rest-auth/registration/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                const token = res.data.key;
                localStorage.setItem('token', token);
            })
            .catch(function (reason) {
                window.location.replace("/registration")
            })
    }


    return (
            <div className="register-block">
                <h1 className="title-block">
                    Регистрация
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
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="text-block33"
                        >
                            Почта
                        </label>
                        <input
                            type="name"
                            onChange={(event) => setMail(event.target.value)}
                            value={mail}
                            className="input-block33"
                        />
                    </div>
                    <br />
                    <div className="mt-6">
                        <Link to="/login"
                              className="action-block33"
                              onClick={() => Create()}
                        >
                            Зарегестрироваться
                        </Link>
                    </div>
                </form>

                <p className="repage-block">
                    {" "}
                    Уже есть аккаунт?{" "}
                    <a
                        href="/login"
                        className="font-medium text-indigo-600 text-xl hover:underline"
                    >
                        Войти
                    </a>
                </p>
            </div>
    )
}
export default RegistrationPage;