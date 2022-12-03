import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Head from './head'
import Header from './header'

const Repo = () => {
  const { userName, RepositoryName } = useParams()
  const [name, setName] = useState([])
  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${RepositoryName}/master/README.md`)
      .then((it) => {
        setName(it.data)
      })
      .catch((err) => {
        console.log(err)
        setName('No Readme.md')
      })
    return () => {}
  }, [])
  return (
    <div id="#description">
      <Head title="Readme.md" />
      <Header />
      <ReactMarkdown>
      {name}
      </ReactMarkdown>
    </div>
  )
}

Repo.propTypes = {}

export default React.memo(Repo)
