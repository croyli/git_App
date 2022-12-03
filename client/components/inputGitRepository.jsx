import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const InputGitRepositiry = (props) => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
    props.onChange(newValue)
  }
  return <input id="#input-field" type="text" value={value} onChange={onChange} />
}

const LinkToUserGit = () => {
  const [id, setId] = useState('')
  const onInputChange = (nmb) => {
    setId(nmb)
  }
  return (
    <div>
      <InputGitRepositiry onChange={onInputChange} />
      <div>
        <Link id="#search-button" to={id}>
          Go to repositories
        </Link>
      </div>
    </div>
  )
}

export default React.memo(LinkToUserGit)
