import Menu from '@/icons/Menu'
import ArrowRight from '@/icons/ArrowRight'
import Upgrade from '@/icons/Upgrade'
import { FCC } from '@/types'
import React from 'react'
import Settings from '@/icons/Settings'
import TechnicalSupport from '@/icons/TechnicalSupport'
import QrCode from '@/icons/QrCode'

type Props = {}

const OurService:FCC = (props: Props) => {
  return (
    <div className="flex flex-col w-full items-center gap-16 px-8">
      <div className='flex flex-col items-center'>
        <p className='font-semibold text-3xl text-[#E05BFF] uppercase'>WHAT WE OFFER</p>
        <p className='font-extrabold text-7xl text-white uppercase'>OUR SERVICE</p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
        <div className='flex flex-col hover:bg-[rgba(224,91,255,0.1608)] hover:border-[2px] border-[#E05BFF] rounded-[20px] w-full h-96 xl:h-[612px] justify-center items-center gap-8 xl:gap-16'>
          <Menu/>
          <div className='font-extrabold text-3xl text-white text-center px-20'>
            BLOCKCHAIN CONSULTATION
          </div>
          <ArrowRight/>
        </div>
        <div className='flex flex-col hover:bg-[rgba(224,91,255,0.1608)] hover:border-[2px] border-[#E05BFF] rounded-[20px] w-full h-96 xl:h-[612px] justify-center items-center gap-8 xl:gap-16'>
          <Settings/>
          <div className='font-extrabold text-3xl text-white text-center px-20'>
            BLOCKCHAIN CONSULTATION
          </div>
          <ArrowRight/>
        </div>
        <div className='flex flex-col hover:bg-[rgba(224,91,255,0.1608)] hover:border-[2px] border-[#E05BFF] rounded-[20px] w-full h-96 xl:h-[612px] justify-center items-center gap-8 xl:gap-16'>
          <TechnicalSupport/>
          <div className='font-extrabold text-3xl text-white text-center px-20'>
            BLOCKCHAIN CONSULTATION
          </div>
          <ArrowRight/>
        </div>
        <div className='flex flex-col hover:bg-[rgba(224,91,255,0.1608)] hover:border-[2px] border-[#E05BFF] rounded-[20px] w-full h-96 xl:h-[612px] justify-center items-center gap-8 xl:gap-16'>
          <QrCode/>
          <div className='font-extrabold text-3xl text-white text-center px-20'>
            BLOCKCHAIN CONSULTATION
          </div>
          <ArrowRight/>
        </div>
      </div>
    </div>
  )
}

export default OurService