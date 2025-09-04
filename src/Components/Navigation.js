import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navigation'>
      <Link to="/" style={{marginRight: "20px"}}>Pokemon</Link>
      
    </nav>
  );
}

export default Navigation;