import React, { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

const Todos = () => {
  const context = useContext(GlobalContext)

  return (
    <>
      {context.usersList.map((user) => (
        <p key={user.id}>
          <span>{user.name}</span>
          <button>X</button>
        </p>
      ))}
    </>
  )
}

export default Todos
