


import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";




const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
      <div className='hidden md:flex gap-5'>
            <h2 className='
            hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>Home</h2>
            <h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>History</h2>
            <h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>Contact Us</h2>
            <h2 className='hover:bg-blue-500
            px-3 cursor-pointer
            p-2 rounded-full hover:text-white'>Why us</h2>
        </div>
      
      

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='hover:bg-blue-500
        px-3 cursor-pointer
        p-2 rounded-full hover:text-white'
      />
    </nav>
  </header>
);

export default NavBar;
