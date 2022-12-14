import * as React from 'react'

export type UserType = {
  firstName?: string
  lastName?: string
  phoneNumber?: string
  email?: string
  password?: string
  id?: string
  key?: string
  profilePic?: string
}
export type UserContext = {
  currentUser: UserType
  setCurrentUser: (user: UserType) => void
  checkLogin: () => void
  setAuthIsLoading: (isLoading: boolean) => void
  authIsLoading: boolean
  handleLogout: () => void
}
const CurrentUserContext = React.createContext<any>(null)

export default CurrentUserContext

type ProviderProps = {
  children: React.ReactNode
}
export const CurrentUserProvider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = React.useState<UserType | null>(null)
  const [authIsLoading, setAuthIsLoading] = React.useState(true)
  const [messages, setMessages] = React.useState<any[]>([])

  React.useEffect(() => {
    checkLogin()
  }, [])

  const token = localStorage.getItem('key')

  const checkLogin = async () => {
    const key = localStorage.getItem('key')
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const email = localStorage.getItem('email')
    const id = localStorage.getItem('id')
    const profilePic: any = localStorage.getItem('profilePic')

    setAuthIsLoading(true)

    if (key && firstName && lastName && email && id && profilePic && key) {
      setCurrentUser({ firstName, lastName, email, id, profilePic, key })
      setAuthIsLoading(false)
      fetchData()
    } else {
      setCurrentUser(null)
      setAuthIsLoading(false)
    }
  }

  const fetchData = () => {
    try {
      fetch('http://localhost:5000/messages/p-message', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          setMessages(Object.values(Object.values(json)))
        })
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = async () => {
    localStorage.removeItem('user')
    setCurrentUser(null)
  }

  const stateValues = {
    currentUser,
    setCurrentUser,
    checkLogin,
    setAuthIsLoading,
    authIsLoading,
    handleLogout,
    messages,
    setMessages,
  }

  return (
    <CurrentUserContext.Provider value={stateValues}>
      {children}
    </CurrentUserContext.Provider>
  )
}
