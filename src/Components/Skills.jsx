import React from 'react'

const Skill = ({name, level}) => {

  const percent = () => {
    return (level*25).toString() + "%";
  }

  return (
    <div className='transition-all hover:scale-105 bg-p-black p-3 w-full mt-4 mb-4 rounded lg:max-w-2xl'>
      <div className='pb-3'>{name}</div>
      <div className='w-full bg-p-grey h-5 rounded'>
        <div style={{width: percent()}} className={`bg-p-main h-full rounded`}></div>
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