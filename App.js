import React from 'react';
import axios from 'axios';

import { useState } from 'react';

const PlayerApp = () => {

  let DataTransfer = [];
  const [iset, setiset] = useState(0)
  const [rerender, setrerender] = useState(0)
  const [redata, setredata] = useState([])
  let check = 0;
  const MyData = async () => {
    if (redata.length === 0) {
      await axios.get('http://localhost:8000/cskget').then(res => {
        DataTransfer = res.data
        console.log("before if 1", DataTransfer.length, DataTransfer)
      })
      if (DataTransfer.length > 12) {
        await axios.delete('http://localhost:8000/delcsk').then('')
        await axios.post('http://localhost:8000/cskpost').then('')
        await axios.get('http://localhost:8000/cskget').then(res => {
          DataTransfer = res.data
          console.log(res.data)
          setredata(res.data)
        })
      }
      else if (DataTransfer.length === 0) {
        await axios.post('http://localhost:8000/cskpost').then("")
        await axios.get('http://localhost:8000/cskget').then(res => {
          DataTransfer = res.data
          console.log(res.data)
          check = 1;
          setredata(res.data)

        })
      }
      else {
        console.log('suck less', DataTransfer)
        await axios.get('http://localhost:8000/cskget').then(res => {
          DataTransfer = res.data
          setredata(res.data)
        })
      }
    }
  }


  const Abc = () => redata.length == 0 ? MyData() : console.log("not needed")
  Abc();



  const handlePrevious = () => {
    let temp = iset - 1
    if (temp < 0) {
      document.getElementById('prevdiv').setAttribute.disabled = 'true'
      document.getElementById('nextdiv').style.visibility='visible'
      document.getElementById('prevdiv').style.visibility='hidden'
    } else{
      setiset(temp)
      document.getElementById('nextdiv').style.visibility='visible'
      document.getElementById('prevdiv').style.visibility='visible'
    }
  }

  const handleNext = () => {
    let temp = iset + 1
    if (temp == redata.length) { 
      document.getElementById('nextdiv').setAttribute.disabled = 'true'
      document.getElementById('nextdiv').style.visibility='hidden'
      document.getElementById('prevdiv').style.visibility='visible'
   }
    else {
      setiset(temp)
      document.getElementById('nextdiv').style.visibility='visible'
      document.getElementById('prevdiv').style.visibility='visible'
    }
  }
  return (
    <div id='maindivini' >
      <h1 id = 'heading'> Players</h1>
      <div id='maindiv'>
      <div id="prevdiv" onClick={() => handlePrevious()}>  <i class="fas fa-arrow-left"  id='prev'></i></div>
      <div id='playerCard'>
        <div id='playerimgdiv'>
          <img id='playerimg' src={redata.length && redata[iset].photo}></img>
        </div>
        <div id='playerdetdiv'>
          <h1 id='pname' className='setshadow'>{redata.length && redata[iset].name}</h1>
          <h2 id='team' className='setshadow'>{redata.length && redata[iset].team}</h2>
          <h2 id='role' className='setshadow'>{redata.length && redata[iset].Role}</h2>
          <h2 id='price'className='setshadow'>Base Price:- {redata.length && redata[iset].price}</h2>
        </div>
        <div id='logoimgdiv'>
          <img id='teamlogo' src={redata.length && redata[iset].logo}></img>
        </div>
      </div>

      <div id="nextdiv"  onClick={() => handleNext()}> <i class="fas fa-arrow-right" id='next'></i></div>

    </div>
    </div>
  );

}

export default PlayerApp;