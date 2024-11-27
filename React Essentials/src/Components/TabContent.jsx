import React from 'react'
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';

function TabContent() {
    const [Topic, SetTopic] = useState()
    function HandleSelect(selected) {
      SetTopic(selected)
    }
  return (
    <>
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
    </>
  )
}

export default TabContent
