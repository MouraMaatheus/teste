import { useState } from 'react'
import './App.css'
import Comp1 from './componentes/Comp1'

function App() {
  let [mostrar, setMostrar] = useState(false)
  let [msgBtn,setMsgBtn] = useState('Mostrar Parágrafo')

  function mostrarParagrafo(){
    if(mostrar == true){
      setMostrar(false)
      setMsgBtn('Mostrar Paragrafo')
    }else{
      setMostrar(true)
      setMsgBtn('Esconder Paragrafo')
    }
  }

  return (
    <>
      <button onClick={mostrarParagrafo}>{msgBtn}</button>
      {mostrar && (
        <div>
          <h2>Dormir</h2>
          <img src="https://i.pinimg.com/564x/6e/d2/d1/6ed2d11d2355c31232b4576b71f133af.jpg" alt="" width={'200px'}/>
        </div>
      )}

      <Comp1/>




    </>
  )
}

export default App
