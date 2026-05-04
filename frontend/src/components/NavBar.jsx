import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import Logo from "../assets/Logo.png"
const NavBar = () => {
  const navItems = ['Features', 'Specialties', 'Contact', 'About'];

  return (
    <nav className='sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center'>
        
        <div className='flex items-center cursor-pointer hover:opacity-90 transition-opacity'>
          <img src={Logo} alt="SehatSetu" className='w-44 md:w-52 object-contain drop-shadow-sm' />
        </div>

        <div className='hidden md:block'>
          <ul className='flex gap-8 lg:gap-12 font-medium text-slate-600'>
            {navItems.map((item) => (
              <li key={item} className='cursor-pointer text-[15px] hover:text-blue-600 transition-colors duration-200 relative group py-1'>
                <a href={`#${item}`}>{item}</a>
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full rounded-full'></span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <header>
            <Show when="signed-out">
              <div className='flex items-center gap-5 lg:gap-7'>
                <SignInButton fallbackRedirectUrl="/dashboard" className='hidden sm:block text-slate-600 cursor-pointer text-[15px] font-medium hover:text-blue-600 transition-colors'>
                  Doctor's Portal
                </SignInButton>
                <SignUpButton fallbackRedirectUrl="/dashboard" className='bg-gradient-to-r from-blue-600 to-blue-700 text-white cur px-7 py-2.5 rounded-full text-[15px] font-medium hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 shadow-blue-500/30 shadow-md border border-blue-500/20'>
                  Join Us Now
                </SignUpButton>
              </div>
            </Show>
            <Show when="signed-in">
              <div className='flex items-center justify-center p-0.5 rounded-full hover:ring-4 ring-blue-50 transition-all'>
                <UserButton />
              </div>
            </Show>
          </header>
        </div>
      </div>
    </nav>
  )
}

export default NavBar