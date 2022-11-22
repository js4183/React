import React from 'react'
import Member from './Components/Member'

const AppExample = () => {
    let team="연주팀"
  return (
    <div>
        <Member teamName={team} name="고연주" grade="팀장"></Member>
        <Member teamName={team} name="마준호"></Member>
        <Member teamName={team} name="임아해"></Member>
        <Member teamName={team} name="주상민"></Member>
    </div>
  )
}

export default AppExample