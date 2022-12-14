import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AccountList from "../components/AccountList"
import EditProfile from "../components/EditProfile"
import { selectMe } from "../selectors"

export default function UsersPage() {
  const me = useSelector(selectMe)
  console.log("----------------------", me)
  const navigate = useNavigate()
  const [showMyProfile, setShowMyProfile] = useState(false)

  useEffect(() => {
    if (!me) {
      navigate("/signin")
    }
  }, [])

  if (!me) {
    return null
  }

  return (
    <main className="main bg-dark">
      {showMyProfile ? (
        <EditProfile onCancel={() => setShowMyProfile(false)} />
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {me.firstName} {me.lastName}!
          </h1>
          <button
            onClick={() => {
              setShowMyProfile(true)
            }}
            className="edit-button"
          >
            My profile
          </button>
        </div>
      )}

      <AccountList />
    </main>
  )
}
