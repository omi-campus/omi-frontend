/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUp() {
  const [activeTab, setActiveTab] = useState('student')
  const router = useRouter()

  return (
    <div className="min-h-screen flex font-manrope">

      {activeTab === 'student' ? (
        <div key="student-view" className="contents">
          {/* Left — Forest Green panel */}
          <div className="hidden lg:flex lg:w-[45%] bg-forest-green flex-col justify-between p-12 overflow-y-auto">
            <Link href="/">
              <img src="/images/logo-light.svg" alt="Omi" className="h-8 w-auto" />
            </Link>

            <div className="flex-1 flex flex-col justify-center py-8">
              <h1 className="text-chalk-white text-5xl font-bold leading-[1.1] mb-6 uppercase max-w-85">
                A Higher Standard of Exchange.
              </h1>
              <p className="text-[#D0E8DB] text-base max-w-sm mb-10">
                Omi is the curated marketplace for University of Jos students. Secure, verified, and strictly academic.
              </p>

              {/* Textbook card image — bigger */}
              <div className="mb-8">
                <img 
                  src="/images/textbook.png" 
                  alt="Textbook showcase" 
                  className="max-w-95 w-full h-auto rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <p className="text-[#5A6B5C] text-xs mt-6">
              © 2026 OMI MARKETPLACE. THE DIGITAL CURATOR.
            </p>
          </div>

          {/* Right — Student form */}
          <div className="flex-1 flex flex-col bg-chalk-white">
            <div className="flex items-center justify-between px-8 py-5">
              <div className="lg:hidden">
                <img src="/images/logo-dark.svg" alt="Omi" className="h-7 w-auto" />
              </div>
              <div className="ml-auto">
                <span className="text-[#727874] text-sm">Already have an account? </span>
                <Link href="/auth/login" className="text-[#1A1C1B] font-bold text-sm underline">Log In</Link>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 pb-12">
              <div className="w-full max-w-lg mx-auto">
                <div className="flex bg-[#EFEFED] rounded-xl p-1 mb-8">
                  <button
                    onClick={() => setActiveTab('student')}
                    className="flex-1 py-2.5 rounded-lg text-sm font-bold bg-white text-[#1A1C1B] shadow-sm transition-all"
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setActiveTab('vendor')}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-[#727874] transition-all hover:text-[#1A1C1B]"
                  >
                    Vendor
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-[#1A1C1B] mb-1 uppercase tracking-tight">Create Account.</h2>
                <p className="text-[#727874] text-sm mb-8">Enter your credentials to join the scholarly marketplace.</p>

                <StudentForm router={router} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div key="vendor-view" className="contents">
          {/* Left — Vendor form */}
          <div className="flex-1 flex flex-col bg-chalk-white">
            <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12">
              <div className="w-full max-w-lg mx-auto">
                <div className="flex bg-[#EFEFED] rounded-xl p-1 mb-8">
                  <button
                    onClick={() => setActiveTab('student')}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-[#727874] transition-all hover:text-[#1A1C1B]"
                  >
                    STUDENT
                  </button>
                  <button
                    onClick={() => setActiveTab('vendor')}
                    className="flex-1 py-2.5 rounded-lg text-sm font-bold bg-white text-[#1A1C1B] shadow-sm transition-all"
                  >
                    VENDOR
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-[#1A1C1B] mb-1">Create Vendor Account</h2>
                <p className="text-[#727874] text-sm mb-8">Provide your professional credentials to begin.</p>

                <VendorForm router={router} />
              </div>
            </div>

            <div className="px-8 lg:px-16 pb-8">
              <div className="border-t border-[#E5E5E3] pt-6">
                <p className="text-center text-sm text-[#727874]">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="text-[#1A1C1B] font-bold">Log In</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right — Forest Green panel */}
          <div className="hidden lg:flex lg:w-[45%] bg-forest-green flex-col justify-between p-12 relative overflow-hidden">
            {/* Logo pushed to far right */}
            <div className="flex justify-end relative z-10">
              <img src="/images/logo-light.svg" alt="Omi" className="h-8 w-auto" />
            </div>

            <div className="relative z-10 max-w-md">
              <h1 className="text-chalk-white text-5xl font-bold leading-[1.1] mb-8 max-w-95">
                The curated standard for commerce.
              </h1>
              <div className="flex items-start gap-3">
                <svg 
                  className="w-5 h-5 text-[#D0E8DB] mt-0.5 shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-chalk-white font-semibold mb-1">Trust Statement</p>
                  <p className="text-[#D0E8DB] text-sm leading-relaxed">
                    Join a select ecosystem where quality is the primary currency. Our vetting process ensures only the most dedicated vendors reach our discerning audience.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#5A6B5C] text-xs relative z-10">
              © 2026 OMI MARKETPLACE. THE DIGITAL CURATOR.
            </p>

            <img 
              src="/images/vendor-texture.png" 
              alt="" 
              className="absolute bottom-0 right-0 w-full h-auto opacity-20 pointer-events-none z-0"
            />
          </div>
        </div>
      )}
    </div>
  )
}

function StudentForm({ router }) {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    emailPrefix: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (!form.emailPrefix.trim()) errs.emailPrefix = 'School email is required'
    if (!form.password) errs.password = 'Password is required'
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match'
    if (!form.agreed) errs.agreed = 'You must agree to continue'
    return errs
  }

  const handleSubmit = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    router.push('/auth/student/otp')
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Full Name</label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-xl bg-[#EFEFED] text-[#1A1C1B] placeholder-[#727874] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+234 000 000 0000"
          className="w-full px-4 py-3 rounded-xl bg-[#EFEFED] text-[#1A1C1B] placeholder-[#727874] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">School Email Address</label>
        <div className="flex rounded-xl overflow-hidden bg-[#EFEFED] focus-within:ring-2 focus-within:ring-forest-green transition-all">
          <input
            name="emailPrefix"
            value={form.emailPrefix}
            onChange={handleChange}
            placeholder="student.name"
            className="flex-1 px-4 py-3 bg-transparent text-[#1A1C1B] placeholder-[#727874] text-sm outline-none"
          />
          <span className="px-4 py-3 text-sm text-[#727874] font-medium bg-[#E5E5E3] border-l border-[#C2C8C3]">
            @unijos.edu.ng
          </span>
        </div>
        {errors.emailPrefix && <p className="text-red-500 text-xs mt-1">{errors.emailPrefix}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#EFEFED] text-[#1A1C1B] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#EFEFED] text-[#1A1C1B] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="agreed"
          checked={form.agreed}
          onChange={handleChange}
          className="mt-0.5 accent-forest-green w-4 h-4 cursor-pointer"
        />
        <p className="text-xs text-[#727874] leading-relaxed">
          I agree to the{' '}
          <Link href="/privacy" className="underline text-[#1A1C1B]">Privacy Policy</Link>
          {' '}and{' '}
          <Link href="/terms" className="underline text-[#1A1C1B]">Terms of Service</Link>
          . I confirm that I am a current student at the University of Jos.
        </p>
      </div>
      {errors.agreed && <p className="text-red-500 text-xs">{errors.agreed}</p>}

      <button
        onClick={handleSubmit}
        className="w-full py-4 bg-forest-green text-chalk-white font-bold text-sm rounded-xl hover:bg-[#172C24] transition-colors flex items-center justify-center gap-2"
      >
        Create Account <span className="text-lg">→</span>
      </button>
    </div>
  )
}

function VendorForm({ router }) {
  const [form, setForm] = useState({
    businessName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.businessName.trim()) errs.businessName = 'Business name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (!form.email.trim()) errs.email = 'Business email is required'
    if (!form.password) errs.password = 'Password is required'
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match'
    return errs
  }

  const handleSubmit = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    router.push('/auth/vendor/otp')
  }

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Business Name</label>
        <input
          name="businessName"
          value={form.businessName}
          onChange={handleChange}
          placeholder="The Curator Collective"
          className="w-full px-4 py-3 rounded-xl bg-[#EFEFED] text-[#1A1C1B] placeholder-[#727874] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
        />
        {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 000 000 0000"
            className="w-full px-4 py-3 rounded-xl bg-[#EFEFED] text-[#1A1C1B] placeholder-[#727874] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Business Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="admin@omi.co"
            className="w-full px-4 py-3 rounded-xl bg-[#EFEFED] text-[#1A1C1B] placeholder-[#727874] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Password</label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-11 rounded-xl bg-[#EFEFED] text-[#1A1C1B] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727874] hover:text-[#1A1C1B] transition-colors p-1"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1A1C1B] uppercase tracking-wide mb-1.5">Confirm Password</label>
        <div className="relative">
          <input
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-11 rounded-xl bg-[#EFEFED] text-[#1A1C1B] text-sm outline-none focus:ring-2 focus:ring-forest-green transition-all"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727874] hover:text-[#1A1C1B] transition-colors p-1"
          >
            {showConfirmPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-4 bg-forest-green text-chalk-white font-bold text-sm rounded-xl hover:bg-[#172C24] transition-colors"
      >
        Create Vendor Account
      </button>

      <p className="text-center text-xs text-[#727874]">
        By registering, you agree to our{' '}
        <Link href="/terms/vendor" className="underline text-[#1A1C1B]">Vendor Terms of Service</Link>
        {' '}and{' '}
        <Link href="/privacy" className="underline text-[#1A1C1B]">Privacy Policy</Link>.
      </p>
    </div>
  )
}