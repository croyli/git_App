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
      <div className="mb-5">
        <InputGitRepositiry onChange={onInputChange} />
      </div>
      <div>
        <Link
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          id="#search-button"
          to={id}
        >
          Go to repositories
        </Link>
      </div>
    </div>
  )
}

export default React.memo(LinkToUserGit)
