import React from 'react'
import styles from "./AddBox.module.css";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const AddBox = ({onClick}) => {
  return (
    <div className={styles.container} onClick={onClick} >
        <AddRoundedIcon />
    </div>
  )
}

export default AddBox