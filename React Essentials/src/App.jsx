import Header from './Components/Header.jsx';
import TabContent from './Components/TabContent.jsx';
import Concepts from './Components/Concepts.jsx';


function App() {

  return (
    <div>
      <Header />
      <main>
        <Concepts />
        <TabContent />
      </main>
    </div>
  );
}

export default App;