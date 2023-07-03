import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import SearchBox from '@/components/SearchBox'
import Button from '@/components/Button'
import Business from '@/components/Business'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className=''>
      <div className="">
        <Header />
      </div>
      <div className='flex items-center flex-col m-auto  overflow-x-hidden mt-32'>
        {/* logo */}
        <Image className='' src={Logo} width={272} height={272} alt={Logo} />
        {/* searchbox */}
        <SearchBox />
        
        {/* online business */}
        <Business />
        {/* languages */}
      </div>
    </div>
  )
}
