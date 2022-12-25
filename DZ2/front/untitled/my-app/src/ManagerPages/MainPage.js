import {GetBuys, GetPurchases} from "../contexts/models/provider";
import React from "react";
import {Link} from "react-router-dom";
import "../static/MainPage.css"


function MainPage(){
    //Статусы заказа: 0-удалён; 1-в ожидании; 2-отклонён; 3-принят; 4-завершён.


  return(
      <div>
       <a href={`../`}>Начало/</a>
       <a href = {'/models/manager'}>Заказы/</a>
       <br />
          {GetPurchases().map(purchase=>(
              <div key = {purchase.id} className="purchase_block">
                  <h1>Заказ №{purchase.id}</h1>
                  <div>Создан: {purchase.sell_date.split('T')[0]}</div>
                  <div className="in_line_status">Статус заказа: &nbsp;
                      {
                          purchase.status == 1 ?
                              <div className="in_line_status">в ожидании</div>
                              :
                              purchase.status == 0 ?
                                  <div className="in_line_status">удалён</div>
                                  :
                                  purchase.status == 2 ?
                                      <div className="in_line_status">отклонён</div>
                                      :
                                      purchase.status == 3 ?
                                          <div className="in_line_status">принят</div>
                                          :
                                          purchase.status == 4 ?
                                              <div className="in_line_status">завершён</div>
                                              :
                              <div className="in_line_status">нет информации</div>
                      }
                  </div>
                  <Link className="purchase_link" to={`/models/manager/${purchase.id}`}>К заказу</Link>
              </div>
          ))}
      </div>
  );

 }

 export default MainPage;