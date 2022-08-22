import './App.css';
import Body from './components/Body/Body';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import data from './data';


function App() {

  const cards = []

  for (const card_data of data) {
    cards.push(<Cards key={card_data.id} {...card_data} />)
  }

  return (
    <div className='whole-content'>
      <Header />
      <Body />
      <div className='cards-container'>
        {cards}
      </div>
    </div>
  );
}

export default App;
