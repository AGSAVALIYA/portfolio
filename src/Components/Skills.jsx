import React from 'react'

const Tag = ({name}) => {
  return (
    <div className='bg-p-main w-fit mb-3 md:mb-0 rounded text-p-black p-3 pt-1 pb-1 mr-2'>
      {name}
    </div>
  )
}

const Skill = ({name, level, tags}) => {

  const percent = () => {
    return (level*25).toString() + "%";
  }

  return (
    <div className='transition-all hover:scale-105 bg-p-black p-3 w-full mt-4 mb-4 rounded lg:max-w-2xl'>
      <div className='pb-3'>{name}</div>
      <div className='w-full bg-p-grey h-5 rounded mb-5'>
        <div style={{width: percent()}} className={`bg-p-main h-full rounded`}></div>
      </div>
      <div className='flex flex-col md:flex-row'>
        {tags && tags.map(tag => <Tag name = {tag}/>)}
      </div>
    </div>
  )
}


const Skills = () => {
  return (
    <div id='skills' className='pb-10'>
      <div className='text-3xl'>Skills</div>
      <div>
        <Skill name="Web Development" tags={['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node.js', 'Firebase']} level={2}/>
        <Skill name="Game Development" tags={['Unity', 'pygame']} level={1}/>
        <Skill name="App Development" tags={['React Native', 'Flutter']} level={1}/>
        <Skill name="Python" level={2}/>
        <Skill name="Microsoft Azure" level={1}/>
        <Skill name="Java" level={1}/>
      </div>
    </div>
  )
}

export default Skills