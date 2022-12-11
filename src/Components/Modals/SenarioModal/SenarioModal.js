import React from 'react'
import DefaultModal from '../DefaultModal/DefaultModal'
import SenarioController from './SenarioController'
import SetSenario from './SetSenario'

const SenarioModal = ({ open, handleClose }) => {
  return (
    <DefaultModal open={open} title={"مدیریت سناریو"} handleClose={handleClose}  >
        <SetSenario />
        <SenarioController />
    </DefaultModal>
  )
}

export default SenarioModal