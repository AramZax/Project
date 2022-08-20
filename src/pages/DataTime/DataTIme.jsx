import React, { useState } from 'react'
import "../DataTime/DataTime.css"
import Calendar from 'react-calendar';
import '../../../node_modules/react-calendar/dist/Calendar.css'
import { GoLocation } from "react-icons/go"
import { useForm } from "react-hook-form";
import axios from 'axios';



const DataTIme = (props) => {
  const [data, setData] = useState(false)
  const [value, onChange] = useState(new Date());

const service_id = props.id


  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = async data => {
   
    let employee = {data: JSON.stringify(value),  ...data,service_id };
    console.log(employee);

    axios.post(`https://www.amazon.org.am/api/admin/datetime`,employee)
    .then(response => console.log(response.data))
    .catch(err => console.dir(err))

  };


  const open = () => {
    setData(!data)
  }


  return (
    <>

      <div className="data_time_section">
        <div className="data_time_left"></div>
        <button className='data_time_btn' onClick={open}>Data & Time</button>
        <div className="data_time_rigth"></div>

      </div>
      {data ? <form onSubmit={handleSubmit(onSubmit)} className='data_time_open'>
        <Calendar onChange={onChange} value={value} />

        <div className='data_time_inp_section'>

        <div className="data_name_section">
            <span className='time_span'>Name</span>
              <input type="text" className='data_name_inp'  {...register("user_name")}/>
          </div>
          

          <div className="time_section">
            <span className='time_span'>Time</span>
            <input className='time_inp' type="time"  {...register("time")} />
          </div>

          {/* <div className="hours_section" >
            <span className='time_span'>Hours</span>
            <input className='number_inp' type="number" {...register("hours")} />
          </div> */}

          <div className="location_section">
          <GoLocation className='Location_icon' />
            <input className='location_inp' type="text" placeholder='Location...' {...register('location')} />
          </div>
          

          <button className='nest_btn'>Next</button>

        </div>

      </form> : null}


    </>

  )
}

export default DataTIme