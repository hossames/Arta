'use client';
import { MdKeyboardArrowDown   } from "react-icons/md";
import { RiMenu3Line , RiCloseLine } from "react-icons/ri";
import { HeaderData } from "./data";
import { useState } from "react";
import './Header.css'
const Menu = (props) =>{
    let lang = props.lang;
    return(
    <div className="dropDown flex flex-col absolute nav-item">
        <a href="/products/single-disc-machines" className="menu-item">{HeaderData[lang].single_disc_machines}</a>
        <a href="/products/vacuum-cleaners" className="menu-item">{HeaderData[lang].vacuum_cleaners}</a>
        <a href="/products/scrubber-machines" className="menu-item">{HeaderData[lang].scrubber_machines}</a>
        <a href="/products/burnishers" className="menu-item">{HeaderData[lang].burnishers}</a>
        <a href="/products/sweepers" className="menu-item">{HeaderData[lang].sweepers}</a>
        <a href="/products/blowers" className="menu-item">{HeaderData[lang].blowers}</a>
        <a href="/products/cleaning-trolleys" className="menu-item">{HeaderData[lang].cleaning_trolleys}</a>
        <a href="/products/house-keeping-trolleys" className="menu-item">{HeaderData[lang].house_keeping_trolleys}</a>
        <a href="/products/laundry-trolleys" className="menu-item">{HeaderData[lang].laundry_trolleys}</a>
        <a href="/products/garbage-containers" className="menu-item">{HeaderData[lang].garbage_containers}</a>
        <a href="/products/cleaning-tools" className="menu-item">{HeaderData[lang].cleaning_tools}</a>
        <a href="/products/dryers" className="menu-item">{HeaderData[lang].dryers}</a>
        <a href="/products/bins" className="menu-item">{HeaderData[lang].bins}</a>
    </div>
    )
}

const Nav =(props)=>{
    const [lang, setLang] = useState(1);
    let load = props.loaded;
    if(load&&lang===0)
        document.querySelector('.links-Continer').setAttribute('dir','rtl');
    else if(load){
        document.querySelector('.links-Continer').removeAttribute('dir');
    }
    return(
    <>
    <nav className='links-Continer flex gap-1 text-xl font-medium text-blue-300'>
            <a href="/" className="p-3 nav-item nav-underline">{HeaderData[lang].Home}</a>
            <div className="products relative nav-item">
                <span className="nav-underline p-3 flex items-center gap-1">{HeaderData[lang].Products}<MdKeyboardArrowDown   className=" text-2xl"></MdKeyboardArrowDown></span>
                <Menu lang = {lang}/>
            </div>
            <a href="/ContactUs" className="p-3 nav-item nav-underline">{HeaderData[lang].Contact}</a>
    </nav>
    <nav className="language-select text-xl font-medium text-blue-300 list-none flex gap-3">
        <li  onClick={()=>(setLang(1))}>en</li>
        <li onClick={()=>(setLang(0))}>ar</li>
    </nav>
    </>
    )
}
const SideBar = () => {
    const [current,change]=useState(false);
    const [lang, setLang] = useState(1);
    return(
        <>
        <div className=' SideBar flex gap-1 text-xl font-medium text-blue-300'>
                <a href="/" className="p-3 nav-item nav-underline">{HeaderData[lang].Home}</a>
                <div className="nav-item">
                    <span className="nav-underline p-3 flex items-center gap-1" onClick={ ()=>{change(!current);}
                    }>{HeaderData[lang].Products}<MdKeyboardArrowDown   className=" text-2xl"></MdKeyboardArrowDown></span>
                    {
                    current?
                    <div className="Drop flex flex-col nav-item">
                        <a href="/products/single-disc-machines" className="menu-item">{HeaderData[lang].single_disc_machines}</a>
                        <a href="/products/vacuum-cleaners" className="menu-item">{HeaderData[lang].vacuum_cleaners}</a>
                        <a href="/products/scrubber-machines" className="menu-item">{HeaderData[lang].scrubber_machines}</a>
                        <a href="/products/burnishers" className="menu-item">{HeaderData[lang].burnishers}</a>
                        <a href="/products/sweepers" className="menu-item">{HeaderData[lang].sweepers}</a>
                        <a href="/products/blowers" className="menu-item">{HeaderData[lang].blowers}</a>
                        <a href="/products/cleaning-trolleys" className="menu-item">{HeaderData[lang].cleaning_trolleys}</a>
                        <a href="/products/house-keeping-trolleys" className="menu-item">{HeaderData[lang].house_keeping_trolleys}</a>
                        <a href="/products/laundry-trolleys" className="menu-item">{HeaderData[lang].laundry_trolleys}</a>
                        <a href="/products/garbage-containers" className="menu-item">{HeaderData[lang].garbage_containers}</a>
                        <a href="/products/cleaning-tools" className="menu-item">{HeaderData[lang].cleaning_tools}</a>
                        <a href="/products/dryers" className="menu-item">{HeaderData[lang].dryers}</a>
                        <a href="/products/bins" className="menu-item">{HeaderData[lang].bins}</a>
                    </div>:''
                    }
                </div>
                <a href="/ContactUs" className="p-3 nav-item nav-underline">{HeaderData[lang].Contact}</a>
                <div className="language-select text-xl font-medium text-blue-300 list-none flex gap-3 m-3">
                    <li  onClick={()=>(setLang(1))}>en</li>
                    <li onClick={()=>(setLang(0))}>ar</li>
                </div>
        </div>
        </>
    )
}
export const Header = (props)=>{
    const [showMenu,setShowMenu]=useState(false);
    const [loaded, setloaded] = useState(false);
    window.onload=()=>(setloaded(true));
    return(
        <header id="header" className=" flex justify-between py-4 px-10 bg-black box-border items-center">
            <a href="/" className="p-3 logo text-2xl uppercase font-semibold text-blue-300">Arta</a>
            <Nav loaded={loaded}/>
            {
                showMenu?
                <>
            <RiCloseLine className='text-blue-50 icon close' style={{fontSize:'1.5rem'}} onClick={()=>{
                setShowMenu(!showMenu);
                document.body.classList.remove('overflow-hidden');
                
            }}/>
            <SideBar />
            </>
            :
            <RiMenu3Line className='text-blue-50 icon close' style={{fontSize:'1.5rem'}} onClick={()=>{
                setShowMenu(!showMenu);
                if(window.innerWidth<=768)
                {
                    console.log(window.innerWidth);
                    document.body.classList.add('overflow-hidden');
                }
                else{
                    document.body.classList.remove('overflow-hidden');
                }
            }}/>
        }
        </header>
    )
}
