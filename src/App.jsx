import Nav from "./components/Nav"
import { CustomerReviews, Hero,Footer,Subscriber,SuperQuality,PopularProducts,SpecialOffer,Services } from "./sections"

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className=' xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'><PopularProducts /></section>
      <section className='padding'><SuperQuality /></section>
      <section className='padding-x py-10'><Services /></section>
      <section className='padding'><SpecialOffer /></section>
      <section className='bg-pale-blue padding'><CustomerReviews /></section>
      <section className='padding-x sm:py-32 py-16 w-full'><Subscriber /></section>
      <section className=' text-white bg-black padding-x padding-t'><Footer /></section>
    </main>
  )
}

export default App