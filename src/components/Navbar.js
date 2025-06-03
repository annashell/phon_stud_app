import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h4>Санкт-Петербургский государственный университет</h4>
      <h1>История фонетических исследований</h1>
      <Link to="/">Главная</Link>
      <Link to="/contents">Содержание</Link>
    </nav>
  );
}