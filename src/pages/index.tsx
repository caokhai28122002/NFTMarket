import Card from '@/components/Card'
import NeonText from '@/components/Text/NeonText'
import TextImgBackground from '@/components/Text/TextImgBackground'
import MainLayout from '@/layout/MainLayout'
import { NextPageWithLayout } from '@/types'

const Home: NextPageWithLayout = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <TextImgBackground text="hello" className='font-bold text-9xl' />
      {/* <NeonText text='Hello HI' /> */}
      <Card/>
    </main >
  )
}
export default Home

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>
}