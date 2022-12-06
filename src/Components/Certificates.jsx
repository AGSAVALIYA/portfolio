import React from 'react'
import c1 from '../assets/certificateImages/MicrosoftCertifiedAzureFundamentals.png'
import c2 from '../assets/certificateImages/CrashCourseOnPython.png'
import c3 from '../assets/certificateImages/IntermediateMachineLearning.png'
import c4 from '../assets/certificateImages/DataVisualization.png'
import c5 from '../assets/certificateImages/IntroToMachineLearning.png'
import c6 from '../assets/certificateImages/Pandas.png'
import c7 from '../assets/certificateImages/Python.png'
import c8 from '../assets/certificateImages/FoundationsDataDataEverywhere.png'

const Certificate = ({name, src}) => {
  return (
    <div className='max-w-2xl bg-p-black p-5 rounded mt-4 mb-4'>
      <div className='text-p-main text-2xl pb-5'>{name}</div>
      <img src={src}/>
    </div>
  )
}


const Certificates = () => {
  return (
    <div id='certificates'>
      <div className='text-3xl'>Certificates</div>
      <div>
        <Certificate src={c1} name="Azure Fundamentals"/>
        <Certificate src={c3} name="Intermediate Machine Learning"/>
        <Certificate src={c4} name="Data Visualization"/>
        <Certificate src={c5} name="Intro to Machine Learning"/>
        <Certificate src={c6} name="Pandas"/>
        <Certificate src={c7} name="Python"/>
        <Certificate src={c2} name="Python Crash Course"/>
        <Certificate src={c8} name="Data Science Foundations"/>
      </div>
    </div>
  )
}

export default Certificates