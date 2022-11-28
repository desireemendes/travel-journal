import './App.css';
import data from "./data"
import Entry from './Entry';
import Nav from './Nav';

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
        <Nav />
      {journalEntries}
      </header>
    </div>
  );
}

export default App;
