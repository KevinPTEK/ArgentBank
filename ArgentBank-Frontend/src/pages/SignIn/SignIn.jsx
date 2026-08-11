import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import SignInForm from '../../components/SignInForm/SignInForm'

function SignIn() {
  return (
    <>
      <Nav />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </>
  )
}

export default SignIn