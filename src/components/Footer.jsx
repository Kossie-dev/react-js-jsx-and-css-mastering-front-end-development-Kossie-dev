
function Footer({ 
  companyName = 'MyApp',
  year = new Date().getFullYear()
}) 
{
  return (
    <footer className="bg-gray-900 text-gray-300">
        
      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400 text-sm">
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer;