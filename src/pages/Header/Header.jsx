import React from "react";
import cl from'./Header.module.css';
import Menu from "./Menu";
import title from './image.png'
import kub from './kub.png'
import viber from './vib.png'
import tg from './teg.png'
import ws from './whatS.png'
import phone from './phone.png'
import {Link} from'react-router-dom';


const Header = () =>{


return  (
	<>
	<div className={cl.header}>
		<div className={cl.up}>
			<Link to=""><img className={cl.logo} src={title}/></Link>
			<div className={cl.work}>Пн-Сб: c 10:00 до 20:00<br></br>Выходной: воскресенье</div>	
				<div className={cl.zakaz}>
					<img className={cl.kub} src={kub}/>
					<div className={cl.treeD}>Заказать 3D-макет дома</div>
				</div>
			<div className={cl.phone}>
				<img className={cl.phoneLogo} src={phone}/>
				<div className={cl.phoneVert}>+7 (915) 168-55-50<br></br>
			<div className={cl.vtw}>
				<a href='https://t.me/AquaTechnology_bot'><img className={cl.cont} src={viber}/></a>
				<a href='https://t.me/AquaTechnology_bot'><img className={cl.cont}src={tg}/></a>
				<a href='https://t.me/AquaTechnology_bot'><img className={cl.cont}src={ws}/></a>
			</div>
			</div>
			</div>
			<button className={cl.button}>Заказать звонок</button>
		</div>	
			<Menu />
	</div>

	</>
)
}


export default Header;