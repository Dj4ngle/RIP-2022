import React, {useContext} from 'react'
import {ThemeContext} from "../contexts/models/context";

function Start(){
    const [theme, setTheme] = useContext(ThemeContext);

    return(
        <div>
            <a href = {`/models/cart/`}>Корзина</a>
            <br/>
            <a>Начальная страница</a>
            <button onClick={setTheme('dark')} style={{ background: theme.background, color: theme.foreground }}>
                I am styled by theme context!
            </button>
        </div>
    )
}
export default Start