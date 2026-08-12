import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import AccountCard from '../../components/AccountCard/AccountCard'
import { useSelector } from 'react-redux'
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

  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
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