import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Home, Info, LayoutDashboard, Mail} from 'lucide-react' 

function Layout({ children }) {
  const [currentPage, setCurrentPage] = useState('home')
  
  const navLinks = [
    { 
      label: 'Home', 
      icon: <Home size={18} />,
      onClick: () => setCurrentPage('home')
    },
    { 
      label: 'About', 
      icon: <Info size={18} />,
      onClick: () => setCurrentPage('about')
    },
    { 
      label: 'Dashboard', 
      icon: <Mail size={18} />,
      onClick: () => setCurrentPage('dashboard')
    }
  ]
  
  const footerLinks = [
    { label: 'About Us', onClick: () => setCurrentPage('about') },
    { label: 'Services', onClick: () => console.log('Services') },
    { label: 'Privacy Policy', onClick: () => console.log('Privacy') },
    { label: 'Terms of Service', onClick: () => console.log('Terms') }
  ]
  
  return (
    <div className="flex flex-col">
      <Navbar 
        logo="MyApp" 
        links={navLinks}
        onLogoClick={() => setCurrentPage('home')}
      />
      
      <main className="flex-grow">
        {children || (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Current Page: {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </h1>
            <p className="text-gray-600 mb-8">
              This is a demo layout showing all the reusable components.
            </p>
          </div>
        )}
      </main>
      
      <Footer 
        companyName="MyApp"
        description="Building amazing web experiences with React and Tailwind CSS."
        links={footerLinks}
      />
    </div>
  )
}

export default Layout;