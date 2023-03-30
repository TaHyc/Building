import React from "react";
import cl from'./Menu.module.css';
import {NavLink} from'react-router-dom';
import arrDown from './arrDown.png'


const Menu = () =>{
return <div className={cl.nav}>
	<NavLink to="/katalog" className={cl.item}>Каталог домов<img className={cl.arrDown} src={arrDown}/></NavLink>
	<NavLink to="/servis" className={cl.item} >Услуги<img className={cl.arrDown} src={arrDown}/></NavLink>
	<NavLink to="/about" className={cl.item} >О нас<img className={cl.arrDown} src={arrDown}/></NavLink>
	<NavLink to="/сontacts" className={cl.item} >Контакты</NavLink>
	<NavLink to="/blog" className={cl.item} >Блог<img className={cl.arrDown} src={arrDown}/></NavLink>
	
</div>
}

export default Menu;