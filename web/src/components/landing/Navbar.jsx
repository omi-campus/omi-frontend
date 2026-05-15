import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-chalk-white border-b border-border px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo-dark.svg" alt="Omi" width={24} height={24} />
        <span className="font-bold text-h3 text-text-primary font-manrope">OMI</span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-10">
        <Link href="/feed" className="text-body text-text-secondary hover:text-text-primary transition-colors">
          Browse
        </Link>
        <Link href="/vendor" className="text-body text-text-secondary hover:text-text-primary transition-colors">
          For Vendors
        </Link>
        <Link href="#how-it-works" className="text-body text-text-secondary hover:text-text-primary transition-colors">
          How it works
        </Link>
      </div>

      {/* Auth */}
      <div className="flex items-center gap-3">
      <Link href="/auth/login" className="text-body text-text-primary font-semibold px-4 py-2">
  Log In
</Link>
<Link
  href="/auth/signup"
  className="text-body text-chalk-white font-semibold bg-forest-green px-5 py-2 rounded-button hover:opacity-90 transition-opacity"
>
  Sign Up
</Link>
      </div>

    </nav>
  )
}