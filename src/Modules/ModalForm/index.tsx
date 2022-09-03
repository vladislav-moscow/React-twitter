import './ModalForm.scss';
import MonthSelect from '../../components/MonthSelect';
import DaySelect from '../../components/DaySelect';
import YearSelect from '../../components/YearSelect';
import {useState} from 'react';
import Button from '../../components/Button';
import React from 'react';

function ModalForm({changeFormsValue, nextStep}: {changeFormsValue: any, nextStep:any}) {

  const [inputsValue, setInputsValue] = useState({
    name: '',
    phone: '',
    month: '',
    day: '',
    year: ''
  })
 

  const handleChange = (event:any) => {
    setInputsValue(prev => {
      return {
        ...prev,
      [event.target.name]: event.target.value
      }
      
    })
  }

  const handleClear = (event:any) => {
    setInputsValue(prev => {
      return {
        ...prev,
      [event.target.id]: ''
      }
      
    })
  }

  const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    //Валидация на заполнены ли поля
    if(!inputsValue.name || !inputsValue.phone) {return}

      changeFormsValue(inputsValue)
      nextStep()
  }

  return (
    <div className="sign__modal_form">
      <h2 className="sign__modal_form-title">Создайте учетную запись</h2>
      <form className='sign__modal_form-form' action="#" method='GET'>
        <div className="sign__modal_form-wrapper">
          <input className='sign__modal_form-input' type="text" name='name' placeholder='Имя' onChange={handleChange} value={inputsValue.name}/>
          <span className="sign__modal_form-input-clear" id ='name' onClick={handleClear}>X</span>
        </div>
        <div className="sign__modal_form-wrapper">
          <input className='sign__modal_form-input' type="phone" name='phone' placeholder='Телефон' onChange={handleChange} value={inputsValue.phone}/>
          <span className="sign__modal_form-input-clear" id ='phone' onClick={handleClear}>X</span>
        </div>
        
        <div className="sign__modal_form-content">
          <h4 className="sign__modal_form-content-title">Дата рождения</h4>
          <p className="sign__modal_form-content-text">
            Эта информация не будет общедоступной.
            Подтвердите свой возраст, даже если эта учетная запись предназначена для компании,
            домашнего животного и т. д.
          </p>
        </div>
        <div className="sign__modal_form-birthdate">
          <div className="sign__modal_form-birthdate-wrapp">
            <label className='label' dir='auto' id='Sector1'>
            <span>Месяц</span>
          </label>
          <select className='sign__modal_form-birthdate-sector1 select' name="month" id="Sector1" onChange={handleChange}>
            <MonthSelect/>
          </select>
          </div>
          <div className="sign__modal_form-birthdate-wrapp">
            <label className='label' dir='auto' id='Sector2'>
              <span>День</span>
            </label>
            <select className='sign__modal_form-birthdate-sector2 select' name="day" id="Sector2" onChange={handleChange}>
              <DaySelect/>
            </select>
          </div>
          <div className="sign__modal_form-birthdate-wrapp">
            <label className='label' dir='auto' id='Sector3'>
              <span>Год</span>
            </label>
            <select className='sign__modal_form-birthdate-sector3 select' name="year" id="Sector3" onChange={handleChange}>
              <YearSelect/>
            </select>
          </div>
        </div>
        <Button className={'btn-component__sign-modal btn'} onClick={onSubmit} text={'Далее'}/>
        
      </form>
    </div>
    
  );
}

export default ModalForm;