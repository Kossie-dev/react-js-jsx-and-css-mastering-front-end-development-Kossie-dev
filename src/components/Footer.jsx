import Button from "./Button";

function Footer({ 
  companyName = 'MyApp',
  year = new Date().getFullYear(),
  links = [],
  socialLinks = [],
  description
}) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{companyName}</h3>
            {description && (
              <p className="text-gray-400 text-sm mb-4">{description}</p>
            )}
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.onClick}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter/Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white  focus:outline-none focus:border-blue-500"
              />
              <Button variant="primary" className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;