
import { useContext } from 'react';
import logo1 from '../../../assets/home/logo.jpg';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';

// for shoping cart 
import { FaCartPlus } from "react-icons/fa6";
import useCart from '../../../hooks/useCart';
// for tan Stock quary

const Navbar = () => {
    //for quary tan stock
  const [cart] = useCart();

  //for user and logOut eccess korbo
  const { user, logOut } = useContext(AuthContext);
  //logout ta handle korar jonnno start
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  //logout ta handle korar jonnno end

  const navOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='menu'>Our Menu</Link></li>
    <li><Link to='ordergift'>Order Gift</Link></li>

    <li><Link to='secret'>Secret</Link></li>

         {/* for shoping card show */}
    <li>
      <Link to="/deshboard/cart">
        <button className="btn">
          <FaCartPlus ></FaCartPlus > <div className="badge badge-sm badge-secondary">+{cart.length}</div>
        </button>
      </Link>
    </li>

    {/* for logout and user start */}
    {
      user ? <>
        {/* <span>{user?.displayName}</span> */}
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </> : <>
        <li><Link to='login'>Log In</Link></li>
      </>
    }
    {/* for logout and user end*/}

  </>
  return (
    <div>
      <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <div className='flex'>
            <img className='w-16' src={logo1} alt="" />
            <a className="btn btn-ghost normal-case text-xl">Foundation</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;