import React from 'react'
import FootItem from './FootItem'

const Footer = () => {
  return (
    <div className='static mb-0 bg-stone-100 h-[100px] w-full bottom-0 flex flex-col items-left justify-around px-4 overflow-x-hidden'>
        <div className="text-sm opacity-50 ml-4">Ghana</div>
        <span className='h-[0.5px] opacity-25 w-full bg-gray-400 top-12'></span>
        <div className="flex flex-col items-center justify-between">
            <div className="">
                <FootItem footerLink={''} footerTitle={'About'} />
                <FootItem footerLink={''} footerTitle={'Advertising'} />
                <FootItem footerLink={''} footerTitle={'Business'} />
                <FootItem footerLink={''} footerTitle={'How search works'} />
            </div>
            <div className="">
                <FootItem footerLink={''} footerTitle={'Privacy'} />
                <FootItem footerLink={''} footerTitle={'Terms'} />
                <FootItem footerLink={''} footerTitle={'Settings'} />
            </div>
        </div>
    </div>
  )
}

export default Footer