import reactImg from './assets/react-core-concepts.png'
import {CORE_CONCEPTS} from './data.js'
const reactDescriptions = ['Fundamental', 'Crucial', 'Core','Important'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const Description = reactDescriptions[genRandomInt(3)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {Description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreComponent(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          
        <h2>Core Concepts</h2>
        <ul>
          <CoreComponent {...CORE_CONCEPTS[0]}/>
          <CoreComponent {...CORE_CONCEPTS[1]}/>
          <CoreComponent {...CORE_CONCEPTS[2]}/>
          <CoreComponent {...CORE_CONCEPTS[3]}/>

        </ul>

        </section>
      </main>
    </div>
  );
}

export default App;