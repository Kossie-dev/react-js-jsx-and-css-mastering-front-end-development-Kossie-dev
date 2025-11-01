
function Footer({ 
  companyName = 'MyApp',
  year = new Date().getFullYear()
}) 
{
  return (
    <footer className="bg-[var(--card)] text-[var(--muted-foreground)]">
        
      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
        <p className="text-[var(--muted-foreground)] text-sm">
          © {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer;