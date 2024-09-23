import logo from '../../public/images/ArtDriveColorLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center pr-5 pl-5 h-[60px] bg-blue-800 fixed">
            <img src={logo} alt="logo" width={150} height={150}/>
            <Link to={'/'} className='px-3  h-[30px] bg-blue-400 rounded-2xl text-white'>Main page</Link>
            <Link to={'/generation'} className='px-3  h-[30px] bg-blue-400 rounded-2xl text-white'>Generation page</Link>
        </div>
    )
}

export default Navbar;