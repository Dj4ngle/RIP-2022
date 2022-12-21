import React, {useState} from 'react';
import '../static/LoginPage.css'


export function LoginPage() {

    const [log, setLog] = useState('');
    const [pass, setPass] = useState('');

    function Login() {
        const ob = {
            username: log,
            password: pass,
        }
        fetch("http://127.0.0.1:8000/rest-auth/login/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
            body: JSON.stringify(ob),
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                // if (res.non_field_errors[0] == "Unable to log in with provided credentials."){
                //     alert('Неправильный логин или пароль!')
                // } else{
                    const token = res.key;
                    sessionStorage.setItem('token', token);
                    fetch(`http://127.0.0.1:8000/rest-auth/user/`, {
                        headers: {
                            "Authorization": `Token ${sessionStorage.getItem('token')}`,
                        },
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            localStorage.setItem('user_id', data.pk)
                            localStorage.setItem('user_login', data.username)
                            localStorage.setItem('user_status', data.is_staff)

                            if (data.is_staff) {
                                window.location.replace("/models/managers")
                            }
                        })

                    setTimeout(() => {
                        window.location.replace("/")
                    }, 50);
                //}
            })
            .catch(function (reason) {
                alert('Неправильный!')
                window.location.replace("/login")
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