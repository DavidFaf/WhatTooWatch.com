import React from 'react'
import RoundCard from './RoundCard'
import Link from 'next/link'
import Image from "next/image";
import movieLogo from "@public/assets/icons/movie-logo.svg";


const NavBar = () => {
  return (
    <RoundCard>
    <div className="py-1 px-5 navbar">
      <Link className='navbar-start' href={"/"}>
        <Image  src={movieLogo} alt="Movielogo" width={55} />
      </Link>
        <Link href={"/"}>
      <h3 className='text-purple text-xl navbar-center'>WhatTooWatch.io</h3>
      </Link>
      <p className='navbar-end'> </p>
    </div>
  </RoundCard>

  )
}

export default NavBar