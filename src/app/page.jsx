import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import SearchBox from '@/components/SearchBox'
import Button from '@/components/Button'
import Business from '@/components/Business'

export default function Home() {
  return (
    
    <div className='flex items-center flex-col m-auto mt-[13rem] overflow-x-hidden'>
      {/* logo */}
      <Image className='' src={Logo} width={272} height={272} alt={Logo} />
      {/* searchbox */}
      <SearchBox />
      
      {/* online business */}
      <Business />
      {/* languages */}
    </div>
  )
}
