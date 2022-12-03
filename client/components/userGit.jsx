import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'




const UserGit = () => {
    const { userName } = useParams()
    const [nam, setName] = useState([])
    useEffect(() => {
      axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
         setName(it.data)
      })
      return () => {}
    }, [])
  return (
    <div>
      {nam.length} Publick Repositories
      {nam.map(it => {
        return <div key={nam.name}>{it.name}</div>
      })}
    </div>
  )
}

UserGit.propTypes = {}

export default React.memo(UserGit)
