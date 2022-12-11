import React from 'react'
import { useState } from 'react';
import { CardActionTag } from './MainStyle';

const ActionCard = ({title, id}) => {
    const [act, setAct] = useState(0);
  return (
    <CardActionTag>
        <div className='btn_holder'>
            <span className={act === 1 ? "active" : "" } onClick={()=> setAct(1)} >ON</span>
            <span className={act === 0 ? "active" : "" }  onClick={()=> setAct(0)}>OFF</span>
        </div>
        <div className='title_action'>
            {title}
        </div>

    </CardActionTag>
  )
}

export default ActionCard;