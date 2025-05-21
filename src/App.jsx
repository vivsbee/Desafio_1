// import { useState } from 'react'
import theSims4Logo from './assets/Captura-removebg-preview.png'
import { MyButton } from './components/MyButton.jsx'
import './App.css'

function App() {

  // variables
  let moreInfo = "Dale Click a continuación y descubre más información :)";
  let booleanHobbies = true

  let hobbies = [
    {title: "Construir casas de cero", id: 111},
    {title: "Jugar situaciones creadas por el juego base", id: 222},
    {title: "Jugar a retos o dinamicas hechas por la comunidad simmer", id: 333},
    {title: "Crear lore a mis personajes", id: 444},
    {title: "Crear contenido del juego y compartirlo a redes", id: 555}
  ]

  // const [likes, setLikes] = useState(0); 
  // function handleCount () {
  //   setLikes(likes + 1)
  // }
  
  // Funciones
  function addInfo(){
    alert('👥 Crea Sims únicos Con herramientas de personalización detalladas, puedes moldear a tus Sims desde su apariencia física hasta sus aspiraciones y personalidades. ¿Quieres recrearte a ti mismo, a tus amigos o a personajes imaginarios? Todo es posible, y cada Sim reaccionará al mundo de manera auténtica gracias al sistema de emociones que influye en sus interacciones y comportamientos. 🏡 Diseña el hogar perfecto.El modo de construcción intuitivo te permite levantar desde acogedoras casitas hasta mansiones extravagantes. Personaliza cada detalle, desde la distribución de las habitaciones hasta la decoración interior y el paisaje exterior, dando rienda suelta a tu creatividad arquitectónica. 🌍 Explora mundos vibrantes. Descubre barrios llenos de vida, cada uno con su propio encanto y actividades únicas. Lleva a tus Sims a socializar en cafés, parques o eventos comunitarios, y observa cómo sus relaciones y experiencias moldean sus vidas. 🎉 Amplía tu experiencia Aunque el juego base es gratuito, puedes enriquecer tu experiencia con paquetes de expansión que añaden nuevas profesiones, habilidades, mascotas, estaciones del año y más. Además, la comunidad activa comparte constantemente contenido personalizado a través de la Galería, ofreciéndote infinitas posibilidades para personalizar tu juego.');
  }

  return (
    <>
      <section>
        {/* titulo */}
        <h1>Conoce a "The Sims 4" ^^</h1>


        {/* descripción */}
        <h4><strong>Vive, crea y controla tu mundo</strong></h4>
        <p>Imagina un universo donde cada decisión que tomas da forma a vidas completas. The Sims 4 te invita a sumergirte en una experiencia de simulación de vida sin igual, donde puedes diseñar personajes únicos, construir hogares de ensueño y narrar historias tan realistas o fantásticas como desees.</p> 

        <h3>{moreInfo}</h3>

        <MyButton func={addInfo} text="Info Adicional"/> 

        <hr />

        <img id='theSims4Logo' src={theSims4Logo} alt="Logo theSims4" /> 

        <h4>Algunas de mis hobbies en el juego o acciones que me gusta hacer en el juego son:</h4>

        <section>
          {/* Renderizado de Listas */}
      
          {
            booleanHobbies && (<ul>

              {
                hobbies.map((hobby)=> (
                  <li key={hobby.id}>{hobby.title}</li>
                ))
              }
            </ul>
            )
          }
        </section>

        <p>Si con lo que has visto te convecí a descubrirlo, puedes descargarlo a continuación:</p>
  
        <a href="https://www.ea.com/games/the-sims/the-sims-4">
          <MyButton text="Descargalo aquí :D"/> 
        </a>
        
        {/* A TERMINAR */}  

        {/* <p>Si te gustó la información puedes darle like:</p> */}

        {/* <section>
          <MyButton onClick={handleCount} text="Dale like :3"/>
          <h2>Likes Obtenidos: {Likes} </h2>           
        </section> */}
      </section>
    </>  
  )
}

export default App
