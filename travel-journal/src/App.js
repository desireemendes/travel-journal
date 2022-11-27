import './App.css';
import data from "./data"
import Entry from './Entry';

function App() {

  const journalEntries = data.map(item => {
    return ( <Entry 
      key={item.id}
      {...item}
    />
    )
  })

  return (
    <div className="App">
      <header className="App-header">
      <h1>Travel Journal</h1>
      {journalEntries}
      </header>
    </div>
  );
}

export default App;
