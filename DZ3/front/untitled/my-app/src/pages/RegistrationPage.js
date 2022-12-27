import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../static/RegistrationPage.css'
import {useHistory} from "react-router";

function RegistrationPage() {
    const history = useHistory()
    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');

    function Create() {
        const ob = {
            username: log,
            password: pass,
        }
        fetch('http://127.0.0.1:8000/api/user/create', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ob)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                history.push("/login")
            })
            .catch(function (reason) {
                console.log(reason)
                history.push('/registration')
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