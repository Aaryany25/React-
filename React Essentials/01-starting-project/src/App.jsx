import { CORE_CONCEPTS} from './data.js'
import { EXAMPLES } from './data.js';
import Header from './Components/Header.jsx';
import CoreComponent from './Components/CoreConcepts.jsx';
import TabButton from './Components/TabButton.jsx';
import { useState } from 'react';
function App() {
  const [Topic, SetTopic] = useState()
  function HandleSelect(selected) {
    SetTopic(selected)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">

          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((items,index)=>(
              <CoreComponent key ={index}{...items}/>
            ))}
           

          </ul>

        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={Topic ==="components"} onSelect={() => HandleSelect("components")}>Components</TabButton>
            <TabButton isSelected={Topic ==="jsx"} onSelect={() => HandleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={Topic ==="props"} onSelect={() => HandleSelect("props")}>Props</TabButton>
            <TabButton isSelected={Topic ==="state"} onSelect={() => HandleSelect("state")}>State</TabButton>
          </menu>
          {!Topic ? (<p>Please Select a Topic </p>) :(
            <div id="tab-content">
            <h3>{EXAMPLES[Topic].title}</h3>
            <p>{EXAMPLES[Topic].description}</p>
            <pre>
              <code>{EXAMPLES[Topic].code}</code>
            </pre>
          </div>

          )}
          
        </section>
      </main>
    </div>
  );
}

export default App;