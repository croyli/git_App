import React from 'react'
import LinkToUserGit from './inputGitRepository'

import Head from './head'

const Main = () => (
  <div>
    <Head title="Main" />
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center bg-indigo-800 p-10 rounded-xl select-none">
        <LinkToUserGit />
      </div>
    </div>
  </div>
)

Main.propTypes = {}

export default React.memo(Main)
