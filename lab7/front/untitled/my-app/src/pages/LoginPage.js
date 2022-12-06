import React, {useState} from 'react';
import {useCookies} from "react-cookie";


export function LoginPage() {
    const [cookies, setCookie, removeCookie] = useCookies(['tooken']);

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
                const token = res.key;
                sessionStorage.setItem('token', token);
                window.location.replace("/")
            })
            .catch(function (reason) {
                window.location.replace("/login")
            })
        }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700">
                    Войти
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="login"
                            className="block text-sm font-semibold text-indigo-800"
                        >
                            Login
                        </label>
                        <input
                            type="login"
                            onChange={(event) => setLog(event.target.value)}
                            value={log}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-indigo-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(event) => setPass(event.target.value)}
                            value={pass}
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                </form>
                <div className="mt-6">
                    <button
                        className="w-full text-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                        onClick={() => Login()}
                    >
                        Войти
                    </button>
                </div>

                <p className="mt-8 text-xl font-light text-center text-indigo-700">
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
        </div>
    );
}