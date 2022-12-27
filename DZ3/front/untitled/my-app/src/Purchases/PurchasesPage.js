import {GetPurchase} from "../contexts/models/provider";
import {Link} from "react-router-dom";
import React from "react";

function PurchasesPage(){

    return (
        <div>
            <a href={`../`}>Начало/</a>
            <a href = {'/models/purchases'}>Заказы/</a>
            <button className="action-block33">
                <Link to={`/models/deleted`}>
                    Удалённые
                </Link>
            </button>
            <button className="action-block33">
                <Link to={`/models/sent`}>
                    Отправленные
                </Link>
            </button>
            <button className="action-block33">
                <Link to={`/models/refused`}>
                    Отклонённые
                </Link>
            </button>
            <button className="action-block33">
                <Link to={`/models/accepted`}>
                    Принятые
                </Link>
            </button>
            <button className="action-block33">
                <Link to={`/models/completed`}>
                    Завершённые
                </Link>
            </button>
        </div>
    );
}
export default PurchasesPage;