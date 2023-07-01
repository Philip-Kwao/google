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

const SearchHeader = () => {
  return (
    <header className='relative'>
        <div className="flex items-center justify-between mx-16 my-6">
            <div className="flex items-center 2xl:translate-x-[5rem]">
                {/* Logo */}
                <div className="">
                    <Image width={100} height={100} src={Logo} alt={Logo} />
                </div>
                <WebSearchBox />
            </div>
            {/* filters select */}
            {/* right items */}
            <RightItems />
            {/* safe search select */}
        </div>
        <div className="flex items-center justify-between">
            <span className=""></span>
            <div className="">
                <div className="w-full">
                    <div className="mt-4 flex items-center justify-between">
                    <Tag title={'All'} />
                    <Tag title={'Web'} />
                    <Tag title={'Images'} />
                    <Tag title={'Videos'} />
                    <Tag title={'News'} />
                    </div>
                </div>
            </div>
            <div className="flex items-center max-w-sm text-slate-600">
                <Filter />
                <span className='mx-2 h-5 w-[1px] bg-slate-200 l-10'></span>
                <Tools />
            </div>
            <div className="">
                <SearchSafe />
            </div>
        </div>
        <span className='bottom-[-0.5rem] w-full h-[1px] bg-slate-200 absolute'></span>
    </header>
  )
}

export default SearchHeader