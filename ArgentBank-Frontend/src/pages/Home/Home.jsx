import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import FeatureItem from '../../components/FeatureItem/FeatureItem'
import iconChat from '../../assets/img/icon-chat.webp'
import iconMoney from '../../assets/img/icon-money.webp'
import iconSecurity from '../../assets/img/icon-security.webp'
import './Home.css'

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon={iconChat}
            alt="Icône de discussion"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            icon={iconMoney}
            alt="Icône d'épargne"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            icon={iconSecurity}
            alt="Icône de sécurité"
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home