import { useEffect, useRef } from 'react';
import style from './table.module.css';

const Table = ({ imc }) => {
    const underweight = useRef(null);
    const normalWeight = useRef(null);
    const overweight = useRef(null);
    const obesity = useRef(null);
    const obesity2 = useRef(null);
    const obesity3 = useRef(null);
    const tableBody = useRef(null);

    useEffect(() => {
        if (imc != '') {
            showInTable(imc);
        }
    }, [imc]);

    function showInTable(imc) {
        const childrens = tableBody.current.children;
        for (let i = 0; i < childrens.length; i++) {
            childrens[i].className = '';
        }

        if (imc < 18.5) {
            underweight.current.className = style.active;
        } else if (imc > 18.5 && imc < 24.9) {
            normalWeight.current.className = style.active;
        } else if (imc > 25 && imc < 29.9) {
            overweight.current.className = style.active;
        } else if (imc > 30 && imc < 34.9) {
            obesity.current.className = style.active;
        } else if (imc > 35 && imc < 39.9) {
            obesity2.current.className = style.active;
        } else {
            obesity3.current.className = style.active;
        }
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Tabela de Classificacão IMC</h2>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.border}>
                            IMC
                        </th>
                        <th className={style.border}>
                            Classificação
                        </th>
                    </tr>
                </thead>
                <tbody ref={tableBody}>
                    <tr ref={underweight}>
                        <td>Abaixo de 18,5</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr ref={normalWeight}>
                        <td>18,5 - 24,9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr ref={overweight}>
                        <td>25 - 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr ref={obesity}>
                        <td>30 - 34,9</td>
                        <td>Obesidade grau I</td>
                    </tr>
                    <tr ref={obesity2}>
                        <td>35 - 39,9</td>
                        <td>Obesidade grau II</td>
                    </tr>
                    <tr ref={obesity3}>
                        <td>Acima de 40</td>
                        <td>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;