import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Article from './article/Article';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import data from './db.json';

function App() {
  let items = {"Главная":"/index", "Новости":"/news", "Магазин":"/Store", "About":"/about", "Контакты":"/contacts"};
  let db = data.people;
  return (
    <div className="App">
      <Header />
      <Nav navigation = {items}></Nav>
      <Article db = {db} />
      <Footer />
    </div>
  );
}

export default App;
