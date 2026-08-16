import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import AccountCard from '../../components/AccountCard/AccountCard'
import { useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import EditUserForm from '../../components/EditUserForm/EditUserForm'
import './User.css'

const accounts = [
  {
    id: 'checking',
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
  },
  {
    id: 'savings',
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    id: 'credit',
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
  },
]

function User() {
  const { firstName, lastName } = useSelector((state) => state.user)
  const [isEditing, setIsEditing] = useState(false)
  const editButtonRef = useRef(null)
  const shouldRestoreFocus = useRef(false)

  // Le bouton n'est remonté qu'après le rendu suivant : on ne peut pas lui
  // rendre le focus directement dans handleClose, sa ref y est encore nulle.
  useEffect(() => {
    if (!isEditing && shouldRestoreFocus.current) {
      editButtonRef.current?.focus()
      shouldRestoreFocus.current = false
    }
  }, [isEditing])

  function handleClose() {
    shouldRestoreFocus.current = true
    setIsEditing(false)
  }

  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <div className="header">
          {isEditing ? (
            <EditUserForm onClose={handleClose} />
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {firstName} {lastName}!
              </h1>
              <button
                ref={editButtonRef}
                className="edit-button"
                onClick={() => setIsEditing(true)}
              >
                Edit Name
              </button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account) => (
          <AccountCard key={account.id} {...account} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default User