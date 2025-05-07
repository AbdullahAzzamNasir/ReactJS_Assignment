import Logo from '../assets/logo.png'
import Topbar from './Topbar';

function Navbar(){
    return(
        <>
           <Topbar />
           <nav className="">
            <div className=" flex justify-between max-w-[1440px] mx-auto items-center py-2">
                <div className="logo">
                <img className="w-[200px]" src={Logo} alt="logo" width={200} height={38}/>
                </div>
                <div className="flex items-center gap-10 text-[#284159] text-[18px] font-medium">
                    <a href="/" className='hover:text-[#1dbfcc] hover:font-bold hover:border-b-2 border-[#284159]'>Home</a>
                    <a href="/about" className='hover:text-[#1dbfcc] hover:font-bold hover:border-b-2 border-[#284159]'>About</a>
                    <a href="/services" className='hover:text-[#1dbfcc] hover:font-bold hover:border-b-2 border-[#284159]'>Services</a>
                    <a href="/contact" className='hover:text-[#1dbfcc] hover:font-bold hover:border-b-2 border-[#284159] '>Contact</a>
                </div>
                <div>
                    <a className="block cursor-pointer bg-[#284159] hover:bg-[#1dbfcc] text-white rounded px-6 py-2">GET APPOINTMENT</a>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;