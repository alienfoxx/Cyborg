import './NavItem.css';

const NavItem = (props) => {
  return (
    <li className='nav-item'>
      {props.children} {/* Render children here */}
    </li>
  );
};

const NavItemDropDown = (props) => {
  return (
    <li className='nav-item dropdown'>
      {props.children} {/* Render children here */}
    </li>
  );
};

export default NavItem;
export { NavItemDropDown };