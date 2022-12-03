import React from 'react'
import { useParams } from 'react-router-dom'
import Head from './head'


const UserGit = () => {
  const { user } = useParams()
  return (
  <>
    <Head title="Hello" />
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center bg-indigo-800 p-10 rounded-xl select-none">
        <img alt="wave" src="images/logo-new-text.png" />
        <span className="text-white text-right font-semibold">UserGit</span>
        <div>
          { user }
        </div>
      </div>
    </div>
  </>
  )
}

UserGit.propTypes = {}

export default React.memo(UserGit)
