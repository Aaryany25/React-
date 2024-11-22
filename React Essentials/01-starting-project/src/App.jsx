import {CORE_CONCEPTS} from './data.js'
import Header from './Components/Header.jsx';
import CoreComponent from './Components/CoreConcepts.jsx';
import TabButton from './Components/TabButton.jsx';
function App() {
  function HandleSelect(selected){
    console.log(selected)
}
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
        <section id='examples'>
<h2>Examples</h2>
<menu>
  <TabButton onSelect={()=>HandleSelect("Components")}>Components</TabButton>
  <TabButton onSelect={()=>HandleSelect("Jsx")}>JSX</TabButton>
  <TabButton onSelect={()=>HandleSelect("Props")}>Props</TabButton>
  <TabButton onSelect={()=>HandleSelect("State")}>State</TabButton>

</menu>
Dynamoc Content 
        </section>
      </main>
    </div>
  );
}

export default App;