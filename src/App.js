import React, { useState } from 'react';
import './App.css';
import { bmiDescription, valueColor } from './bmiUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWeightScale,faRuler} from '@fortawesome/free-solid-svg-icons'
import img from "./assets/img.svg"

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [colorClass, setColorClass] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const calculatedBmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBmi(calculatedBmi);
    setShowResult(true);

    // Atualiza a cor do valor com base no IMC
    const color = valueColor(calculatedBmi);
    setColorClass(color);
  };

  return (
    <main id="container">
      <section id="img">
        <img src={img} alt="IMC" />
      </section>

      <section id="calculator">
        <h1 id="title">Calculadora de IMC</h1>
        
        <form id="form" onSubmit={handleSubmit}>

          <div className="input-box">
            <label htmlFor="weight">Peso em Kg</label>
            <div className="input-field">
              <FontAwesomeIcon className='icon' icon={faWeightScale}/>
              <input type="number" step="0.01" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}required/>
              <span>Kg</span>
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="height">Altura em Cm</label>
            <div className="input-field">
              <FontAwesomeIcon className='icon' icon={faRuler}/>
              <input type="number" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required/>
              <span>cm</span>
            </div>
          </div>

          <button id="calculate">Calcular</button>
        </form>

        {showResult && (
          <div id="infos">
            <div id="result">
              
              <div id="bmi">
                <span id="value" className={colorClass}>
                  {bmi.replace('.', ',')}
                </span>
                <span>Seu IMC</span>
              </div>

              <div id="description-content">
                <span id="description">{bmiDescription(bmi)}</span>
              </div>

            </div>

            <div id="more-info">
              <a href="https://mundoeducacao.uol.com.br/saude-bem-estar/imc.htm" target="_blank" rel="noopener noreferrer">
                Saiba Mais</a>
            </div>

          </div>
        )}
      </section>
    </main>
  );
}

export default App;
