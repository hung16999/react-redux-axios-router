import React, { useState } from "react"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { users } from "./constants/users"
import GlobalContext from "./context/GlobalContext"

const App = () => {
  const [usersList, setUsersList] = useState(users)

  return (
    <GlobalContext.Provider value={{ usersList, setUsersList }}>
      <AddTodo />
      <Todos />
    </GlobalContext.Provider>
  )
}

export default App
