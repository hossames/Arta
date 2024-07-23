'use client';
import { MdKeyboardArrowDown   } from "react-icons/md";
import { RiMenu3Line , RiCloseLine } from "react-icons/ri";
import { HeaderData } from "./data";
import { useState } from "react";
import './Header.css'
const Menu = (props) =>{
    const lang = props.lang;
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
    const {lang,showMenu}=props;
    console.log(lang);
    if(lang===0){
        return(
        <nav  className={showMenu?'active links-Continer flex gap-1 text-xl font-medium text-blue-300':'links-Continer flex gap-1 text-xl font-medium text-blue-300'}>
                <a href="/ContactUs" className="p-3 nav-item nav-underline">{HeaderData[lang].Contact}</a>
                <div className="products relative nav-item">
                    <span className="nav-underline p-3 flex items-center gap-1"><MdKeyboardArrowDown className=" text-2xl"></MdKeyboardArrowDown>{HeaderData[lang].Products}</span>
                    <Menu lang={lang}/>
                </div>
                <a href="/" className="p-3 nav-item nav-underline">{HeaderData[lang].Home}</a>
        </nav>
        )
    }else{
        return(
        <nav className={showMenu?'active links-Continer flex gap-1 text-xl font-medium text-blue-300':'links-Continer flex gap-1 text-xl font-medium text-blue-300'}>
                <a href="/" className="p-3 nav-item nav-underline">{HeaderData[lang].Home}</a>
                <div className="products relative nav-item">
                    <span className="nav-underline p-3 flex items-center gap-1">{HeaderData[lang].Products}<MdKeyboardArrowDown   className=" text-2xl"></MdKeyboardArrowDown></span>
                    <Menu lang={lang}/>
                </div>
                <a href="/ContactUs" className="p-3 nav-item nav-underline">{HeaderData[lang].Contact}</a>
        </nav>)
    }
}
export const Header = (props)=>{
    const [lang, setLang] = useState(props.lang);
    const [showMenu,setShowMenu]=useState(false);
    return(
        <header id="header" className=" flex justify-between py-4 px-10 bg-black box-border items-center">
            <a href="/" className="p-3 logo text-2xl uppercase font-semibold text-blue-300">Arta</a>
            <Nav lang={lang} showMenu={showMenu}/>
            <div className="language-select text-xl font-medium text-blue-300 list-none flex gap-3">
                <li  onClick={()=>(setLang(1))}>en</li>
                <li onClick={()=>(setLang(0))}>ar</li>
            </div>
            <RiMenu3Line className={showMenu?'text-blue-50 close icon' : 'text-blue-50 icon open'} style={{fontSize:'1.5rem'}} onClick={()=>{
                setShowMenu(!showMenu);
            }}></RiMenu3Line>
            <RiCloseLine className={showMenu?'text-blue-50 open icon' : 'text-blue-50 icon close'} style={{fontSize:'1.5rem'}} onClick={()=>{
                setShowMenu(!showMenu);
            }}></RiCloseLine>
        </header>
    )
}
