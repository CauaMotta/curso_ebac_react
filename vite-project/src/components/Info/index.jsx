import { useEffect, useState } from 'react';
import style from './info.module.css';

const Info = () => {
    const [showAccordion, setShowAccordion] = useState(false);
    const [hiddenAccordion, sethiddenAccordion] = useState(false);

    function showContent() {
        if (showAccordion) {
            sethiddenAccordion(true);
        } else {
            setShowAccordion(true);
        }
    }

    useEffect(() => {
        if (hiddenAccordion) {
            const timeoutId = setTimeout(() => {
                setShowAccordion(false);
                sethiddenAccordion(false);
            }, 500);

            return () => clearTimeout(timeoutId)
        }
    }, [hiddenAccordion]);

    return (
        <div className={style.container}>
            <div className={`${style.accordion} ${showAccordion ? style.isActive : ''} ${hiddenAccordion ? style.isExiting : ''}`} onClick={showContent}>
                <p>O que é IMC?</p>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div>
                <p className={`${style.accordionBody} ${showAccordion ? style.contentActive : ''} ${hiddenAccordion ? style.contentHidden : ''}`}>O IMC (Índice de Massa Corporal) é uma medida usada para avaliar se uma pessoa está dentro do peso ideal em relação à sua altura. Ele é calculado dividindo o peso (em quilogramas) pela altura (em metros) ao quadrado. Essa é uma ferramenta útil, mas não considera fatores como massa muscular, idade e outros aspectos individuais.</p>
            </div>
        </div >
    )
}

export default Info;