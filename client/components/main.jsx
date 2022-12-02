import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Head from './head'



const InputGitRepositiry = (props) => {
  const [ value, setValue ] = useState(' ')
  const onChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    props.onChange(newValue)
  }
  return <input
    type = 'text'
    value = {value}
    onChange = {onChange}
  />
}

const InputName = () => {
  const [id, setId] = useState('')
  const onInputChange = (nmb) => {
    setId(nmb)
  }
  return (
    <div>
      <Link to={id}>
      go</Link>
      {id}
      <InputGitRepositiry onChange={onInputChange} />
    </div>
  )
}


const Main = () => (
  <div>
    <Head title="Main" />
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center bg-indigo-800 p-10 rounded-xl select-none">
        <InputName />
        <span className="text-white text-right font-semibold">qw</span>
      </div>
    </div>
  </div>
)

Main.propTypes = {}

export default React.memo(Main)
