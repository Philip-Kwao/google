'use client'
import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import SearchBox from './SearchBox'
import Tag from './Tag'
import { AiOutlineArrowDown, AiOutlineSearch } from 'react-icons/ai'
import Camera from '@/assets/images/google-camera.svg'
import WebSearchBox from './WebSearchBox'
import RightItems from './RightItems'
import Filter from './Filter'
import Tools from './Tools'
import { RiArrowDownSFill } from 'react-icons/ri'
import SearchSafe from './SearchSafe'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const SearchHeader = () => {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get("searchTerm")
    const router = useRouter()
    const selectTab = (tab) =>{
        router.push(`/search/${tab==='Images'?'image':'web'}?searchTerm=${searchTerm}`)
    }

  return (
    <header className='relative text-center'>
        <div className="flex items-center lg:justify-between justify-around lg:mx-16 my-6 mx-auto max-w-lg md:max-w-none text-center">
            <div className="flex items-center justify-center 2xl:translate-x-[5rem] flex-col md:flex-row my-4">
                {/* Logo */}
                <div className="my-4 text-center mr-4">
                    <Link href={'/'}>
                        <Image width={130} height={130} src={Logo} alt={Logo} />
                    </Link>
                </div>
                <WebSearchBox />
            </div>
            {/* right items */}
            <RightItems />
            {/* safe search select */}
        </div>
        <div className="flex items-center justify-around lg:justify-between">
            <span className="hidden lg:flex"></span>
            <div className="">
                <div className="w-full">
                    <div className="mt-4 flex items-center justify-between">
                        <div className={`mx-2 ${pathName === '/search/web' && 'bg-blue-500 rounded-full text-white hover:bg-blue-400'}`} onClick={()=>selectTab("All")}>
                            <Tag title={'All'} />
                        </div>
                        <div onClick={()=>selectTab("Images")} className={`mx-2 ${pathName === '/search/image' && 'bg-blue-500 rounded-full text-white hover:!bg-blue-400'}`}>

                            <Tag title={'Images'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center max-w-sm text-slate-600">
                <Filter />
                <span className='mx-2 h-5 w-[1px] bg-slate-200 l-10 hidden lg:flex'></span>
                <Tools />
            </div>
            <div className="hidden lg:flex">
                <SearchSafe />
            </div>
        </div>
        <span className='bottom-[-0.5rem] w-full h-[1px] left-0 bg-slate-200 absolute'></span>
    </header>
  )
}

export default SearchHeader