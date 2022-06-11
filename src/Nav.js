import './App.css';

function Nav() {
  return (
    <nav>
     <h3> <a href="/">Logo</a></h3>
     <ul className='nav-links'>
         <li> <a href="/shop">Shop</a> </li>
         <li> <a href="/about">About</a> </li>
         <li> <a href="/contact">Contact</a> </li>
         
     </ul>
     
    </nav>
  );
}

export default Nav;
