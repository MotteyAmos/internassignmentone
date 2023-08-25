import React from 'react'
import { BiLogoFacebookSquare } from 'react-icons/bi';
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa"
const Footer = () => {
  return (
    <footer class="text-center">
    <div class="flex gap-[1rem] items-center justify-center text-[2rem]">
      <BiLogoFacebookSquare/>
      <FaInstagramSquare/>
      <FaTwitterSquare/>
    </div>
    <div>
      <small>Copyright @2020 All reserved</small>
    </div>
  </footer>
  )
}

export default Footer
