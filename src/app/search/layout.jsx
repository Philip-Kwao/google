import '@/app/globals.css'
import SearchHeader from '@/components/SearchHeader'

export const metadata = {
  title: 'Google Search Page',
  description: 'Generated by create next app',
}

const searchLayout = ({children}) => {
  return (
    <div className='flex flex-col flex-1 min-h-screen'>
        <SearchHeader />
        {children}
    </div>
  )
}

export default searchLayout