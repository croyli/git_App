import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import Header from './header'


const UserGit = () => {
    const { userName } = useParams()
    const [nam, setName] = useState([])
    useEffect(() => {
      axios.get(`https://api.github.com/users/${userName}/repos`)
      .then((arr) => {
        if(!Array.isArray(arr)){
          setName(arr.data)
        }
        else {
          throw new Error(JSON.stringify(arr))
        }
      })
      .catch((err) => {
        console.log(err)
      })
      return () => {}
    }, [])
  return (
    <div>
      <Head title="Repositories"/>
      <Header />
      {nam.length} Publick Repositories
      {nam.map(it => {
        return (
          <div key={nam.name}>
            <Link to={`/${userName}/${it.name}`}>{it.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

UserGit.propTypes = {}

export default React.memo(UserGit)
