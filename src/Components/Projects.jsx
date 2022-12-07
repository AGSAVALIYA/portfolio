import React from 'react'
import cw1 from '../assets/projectImages/catwiki1.png'
import cw2 from '../assets/projectImages/catwiki2.png'
import cw3 from '../assets/projectImages/catwiki3.png'
import cc1 from '../assets/projectImages/cocktail1.png'
import cc2 from '../assets/projectImages/cocktail2.png'
import cc3 from '../assets/projectImages/cocktail3.png'
import tt1 from '../assets/projectImages/ticTacToe1.png'
import tt2 from '../assets/projectImages/ticTacToe2.png'
import tt3 from '../assets/projectImages/ticTacToe3.png'
import ge1 from '../assets/projectImages/geo1.webp'
import ge2 from '../assets/projectImages/geo2.webp'
import ge3 from '../assets/projectImages/geo3.webp'
import cs1 from '../assets/projectImages/cs1.jpeg'
import cs2 from '../assets/projectImages/cs2.jpeg'
import cs3 from '../assets/projectImages/cs3.jpeg'
import {MdOpenInNew} from 'react-icons/md'

const Project = ({name, desc, src1, src2, src3, link=""}) => {
  return (
    <div className='max-w-2xl bg-p-black p-5 rounded h-fit'>
      <div className='pb-5 text-p-main text-2xl'>{name}</div>
      <div className='flex flex-col'>
        <img className='pb-5 max-w-full' alt="projectImage" src={src1}/>
        <img className='pb-5 max-w-full' alt="projectImage" src={src2}/>
        <img className='pb-5 max-w-full' alt="projectImage" src={src3}/>
        <div className='flex flex-row items-center'>
          <div>{desc}</div>
          {link && <a className='text-p-main text-2xl pl-5' href = {link} target="blank"><MdOpenInNew/></a>}
        </div>
      </div>
    </div>
  )
}


const Projects = () => {
  return (
    <div id='projects' className='pb-10'>
      <div className='text-3xl mb-5'>Projects</div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <Project name="Geopocalypse" desc="Android game made with Unity game engine available on the play store" link="https://play.google.com/store/apps/details?id=com.RezNex.Geopocalypse" src1={ge1} src2={ge2} src3={ge3}/>
        <Project name="Cat Wiki" desc="A simple website which acts as a collection of basic information about various cat species (The cat details are fetched from an API)" link="https://github.com/Swaraj9/cat-wiki" src1={cw1} src2={cw2} src3={cw3}/>
        <Project name="Tic Tac Toe" desc="Tic Tac Toe game made with the tkinter python library" src1={tt1} src2={tt2} src3={tt3}/>
        <Project name="Code Speed" desc="An app made with java that for measuring and improving typing speed" src1={cs1} src2={cs2} src3={cs3}/>
        <Project name="Cocktail Menu" desc="A frontend only site that acts a menu for a cocktail store (The cocktails and their details are fetched from an API)" link="https://github.com/Swaraj9/cocktail-menu" src1={cc1} src2={cc2} src3={cc3}/>
      </div>
    </div>
  )
}

export default Projects