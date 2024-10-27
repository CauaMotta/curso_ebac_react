import { useRef, useState } from 'react';
import style from './calculator.module.css';

const Calculator = ({ onEvent }) => {
    const [imc, setImc] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const inputWeight = useRef(null);
    const inputHeight = useRef(null);

    function verifyNumber({ target }) {
        const number = target.value.replace(',', '.');
        const convertFloat = parseFloat(number);
        if (convertFloat < 0) {
            target.value = 0;
        }
    }

    function emitEvent(imc) {
        onEvent(imc);
    }

    function calcImc() {
        const numberWeight = parseFloat(inputWeight.current.value.replace(',', '.'));
        const numberHeight = parseFloat(inputHeight.current.value.replace(',', '.'));

        const imc = numberWeight / (numberHeight ** 2);
        if (!Number.isNaN(imc)) {
            setShowResult(true);
            setImc(imc.toFixed(2));
            emitEvent(imc);
        } else {
            setImc(0);
        }
    }

    return (
        <>
            <div className={style.container}>
                <div>
                    <label htmlFor="weight">Qual seu peso?</label>
                    <input ref={inputWeight} className={style.input} id="weight" type="number" onInput={verifyNumber} placeholder='kg' />
                </div>
                <div>
                    <label htmlFor="height">Qual sua altura?</label>
                    <input ref={inputHeight} className={style.input} id="height" type="number" onInput={verifyNumber} placeholder='m' />
                </div>
                <button className={style.btn} type="button" onClick={calcImc}>Calcular</button>
            </div>
            {showResult && (
                imc != 0 ? (<p className={style.result}>Seu IMC é de: {imc}</p>) : (<p className={style.result}>Algo deu errado, verifique os campos acima.</p>)
            )}
        </>
    )
}

export default Calculator;