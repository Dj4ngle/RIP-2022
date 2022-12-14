import {GetPurchases} from "../contexts/models/provider";
import React from "react";


function MainPage(){
  return(
      <div>
       <a href={`../`}>Начало/</a>
       <a href = {'/models/manager'}>Заказы/</a>
       <br />
       {GetPurchases().map(purchase =>
           <div key = {purchase.id} className="manga_block">
            <div> Заказ: {purchase.id} </div>
            <div>{purchase.status === 1 ?
                <div> В ожидании </div> :
                <div></div>
            }</div>
           </div>)}
      </div>
  );

 }

 export default MainPage;