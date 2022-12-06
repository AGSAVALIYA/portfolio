import React from 'react'

const Skill = ({name, level}) => {
  return (
    <div className='bg-p-black p-3 w-full mt-4 mb-4 rounded'>
      <div className='pb-3'>{name}</div>
      <div className='w-full bg-p-grey h-5 rounded'>
        <div className={`bg-p-main h-full w-${level === 1 ? '1/4' : level === 2 ? '1/2' : level === 3 ? '3/4' : 'full'} rounded`}></div>
      </div>
    </div>
  )
}


const Skills = () => {
  return (
    <div id='skills' className='pb-10'>
      <div className='text-3xl'>Skills</div>
      <div>
        <Skill name="Web Development" level={2}/>
        <Skill name="App Development" level={1}/>
        <Skill name="Game Development" level={1}/>
        <Skill name="Python Scripting" level={2}/>
      </div>
    </div>
  )
}

export default Skills