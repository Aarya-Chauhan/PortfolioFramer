import Link from 'next/link';
import { Button } from './ui/button';

//components
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
      <div className="container mx-auto flex justify-between items-center">
        {/* {logo} */}
        <Link href='/'>
            <h1 className='text-4xl font-semibold'>
                Aarya<span className='text-accent'>.</span>
            </h1>
        </Link>
        {/* desktop navbar */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href='https://www.linkedin.com/in/aarya-chauhan' target='_blank'>
                <Button className='border-2 hover:border-[#00e187]'>Hire me</Button>
            </Link>
        </div>
        {/* mobole navbar   */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
