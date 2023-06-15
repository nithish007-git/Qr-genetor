import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './home.css';
const Home = () => {
    const [qr,setqr] =useState(false);
    const [url ,seturl] =useState();
    const handlechange =()=>{
        setqr(true)

    }
    const handler1 =(events)=>{
        if(events.target.value === null){
            {<h2> enter a value </h2>}
            console.log("passed")
            setqr(false)
        }
        else{
            
        }
        seturl(events.target.value);
        setqr(false)

    }
  return (
    <>
    <h1 className='Title'> QR Genertor </h1>
    <input
     placeholder='URL'
     type='url'
     onChange={handler1}
    /> 
    <button onClick={handlechange}>Genrate </button>
{
    qr ? <QRCode value={url} renderAs='canvas' className='qrcode'/>:" "
}
    

    </>
  )
}

export default Home;