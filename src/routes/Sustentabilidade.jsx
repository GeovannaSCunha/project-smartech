import React from 'react'
import img6 from '../img/sustentabilidade.png'
import '../components/Conteudo.css'

export default function sus() {
  return (
    <>
        <main>
            <section>
                <h1>O que é a Sustentabilidade?</h1>
                <p>Com a sustentabilidade, podemos suprir as necessidades atuais sem prejudicar o meio ambiente e as futuras gerações. A partir do conceito de desenvolvimento sustentável, pesquisamos formas de aprimorar as técnicas atuais para utilizar dos recursos disponíveis, tendo em consideração a preservação do planeta.</p>

                <img src={img6} alt="Palneta Terra sustentavel" width="100%"/>
            </section>
        </main>
    </>
  )
}