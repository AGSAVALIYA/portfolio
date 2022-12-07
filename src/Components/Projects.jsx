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

const Project = ({name, desc, src1, src2, src3}) => {
  return (
    <div className='max-w-2xl bg-p-black p-5 rounded mt-4 mb-4'>
      <div className='pb-5 text-p-main text-2xl'>{name}</div>
      <div className='flex flex-col'>
        <img className='pb-5 max-w-full' alt="projectImage" src={src1}/>
        <img className='pb-5 max-w-full' alt="projectImage" src={src2}/>
        <img className='pb-5 max-w-full' alt="projectImage" src={src3}/>
        <div>{desc}</div>
      </div>
    </div>
  )
}


const Projects = () => {
  return (
    <div id='projects' className='pb-10'>
      <div className='text-3xl'>Projects</div>
      <div className='grid grid-cols-2 gap-4'>
        <Project name="Cat Wiki" desc="Lorem Ipsum" alt="project" src1={cw1} src2={cw2} src3={cw3}/>
        <Project name="Cocktail Menu" desc="Lorem Ipsum" alt="project" src1={cc1} src2={cc2} src3={cc3}/>
        <Project name="Tic Tac Toe" desc="Lorem Ipsum" alt="project" src1={tt1} src2={tt2} src3={tt3}/>
      </div>
    </div>
  )
}

export default Projects