import MainLayout from '@/layout/MainLayout'
import { NextPageWithLayout } from '@/types'
import HeroSection from './components/HeroSection'
import OurService from './components/OurService'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection/>
      <OurService/>
    </div >
  )
}
export default HomePage

HomePage.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>
}