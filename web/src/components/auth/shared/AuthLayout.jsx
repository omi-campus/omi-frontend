/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex font-manrope">
      
      {/* Left panel — Forest Green, desktop only */}
      <div className="hidden lg:flex lg:w-1/2 bg-forest-green flex-col justify-between p-12">
        <Link href="/">
          <img src="/images/logo-light.svg" alt="Omi" className="h-8 w-auto" />
        </Link>
        <div>
          <h1 className="text-chalk-white text-4xl font-bold leading-tight mb-4">
            Your campus.<br />Your community.
          </h1>
          <p className="text-[#D0E8DB] text-lg">
            Buy, sell, and connect with verified UNIJOS students.
          </p>
        </div>
        <p className="text-[#727874] text-sm">
          © 2026 Omi. Built for every Nigerian campus.
        </p>
      </div>

      {/* Right panel — form area */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 bg-chalk-white">
        
        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <Link href="/">
            <img src="/images/logo-dark.svg" alt="Omi" className="h-7 w-auto" />
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          {title && (
            <div className="mb-8">
              <h2 className="text-[#1A1C1B] text-2xl font-bold mb-2">{title}</h2>
              {subtitle && <p className="text-[#727874] text-sm">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>

      </div>
    </div>
  )
}