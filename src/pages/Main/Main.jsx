import React, {useEffect}  from "react";
import cl from'./Main.module.css';
import house from './house.svg'
import reword from './reword.svg'
import bigCloud from './bigCloud.svg'
import upCloud from './upCloud.svg'
import {Link} from'react-router-dom';
 
const Main = () =>{
 window.scrollTo(0, 0)
return  (
	<>
	<div className={cl.mainDiv}>
	<img className={cl.upCloud} src={upCloud}/>
		<div className={cl.leftWindow}>
		<div className={cl.mainText}>Кейс: дом из оцилиндрованного бруса в Балашихе под ключ</div>
		<div className={cl.mainMinText}>Двухэтажный дом, площадью 128 м² в европейском стиле</div>
			<div className={cl.pocoWindow}>
			<div className={cl.titlePocoWindow}>Хотите сотрудничать с профессионалами?</div>
			<img className={cl.reword} src={reword}/>
			<div className={cl.textPocoWindow}>Оставьте заявку и получите бесплатную консультацию</div>
			<div className={cl.inputsWindow}>
				<div className={cl.inputsGoriz}>
					<input placeholder='Ваше имя'/>
					<input placeholder='Номер телефона'/>
				</div>
				<div className={cl.inputsGoriz}>
					<input placeholder='Выберите услугу'/>
					<button className={cl.send}>Отправить</button>
				</div>
			</div>
			<img className={cl.reword} style={{width: '4vw', rotate: '50deg', left: '100px'}}src={reword}/>
			</div>
			<img className={cl.bigCloud} src={bigCloud}/>
		</div>
		<img className={cl.divFoto} src={house}/>


	</div>



	</>
	)
}


export default Main;