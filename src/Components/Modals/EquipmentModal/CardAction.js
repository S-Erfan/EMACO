import React, { useState } from 'react'
import DeleteBin6LineIcon from 'remixicon-react/DeleteBin6LineIcon';
import DraftLineIcon from 'remixicon-react/DraftLineIcon';
import { InputCusMain } from '../../Shared/globalStyledComponents/globalStyledComponents';
import { CardActionsTag } from './Styles';

const CardAction = ({ title, number, id }) => {
    const [value, setValue] = useState(title);


  return (
    <CardActionsTag>
        <div className='info_action' >
            <div className='title' >
                <InputCusMain 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    height={"35px"}
                />
            </div>
            <div className='number' >
                <span>{number}</span>
            </div>
        </div>
        <div className='btn_holder' >
            <DeleteBin6LineIcon />
            <DraftLineIcon />
        </div>
    </CardActionsTag>
  )
}

export default CardAction;