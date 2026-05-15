/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function OTP({ redirectTo }) {
  const [digits, setDigits] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(60)
  const [canResend, setCanResend] = useState(false)
  const [error, setError] = useState('')
  const inputs = useRef([])
  const router = useRouter()

  const isFilled = digits.every(d => d !== '')

  // Countdown timer
  useEffect(() => {
    if (countdown === 0) { setCanResend(true); return }
    const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown])

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const updated = [...digits]
    updated[index] = value.slice(-1)
    setDigits(updated)
    setError('')
    if (value && index < 5) inputs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted.length === 6) {
      setDigits(pasted.split(''))
      inputs.current[5]?.focus()
    }
  }

  const handleResend = () => {
    if (!canResend) return
    setDigits(['', '', '', '', '', ''])
    setCountdown(60)
    setCanResend(false)
    setError('')
    inputs.current[0]?.focus()
  }

  const handleContinue = () => {
    if (!isFilled) return
    // Mock validation — replace with real API call later
    const code = digits.join('')
    if (code === '000000') {
      setError('Invalid code. Please try again.')
      return
    }
    router.push(redirectTo)
  }

  return (
    <div className="min-h-screen flex flex-col bg-chalk-white font-manrope">

      {/* Top nav */}
      <div className="flex items-center justify-center px-8 py-4 border-b border-[#E5E5E3]">
        <Link href="/">
          <img src="/images/logo-dark.svg" alt="Omi" className="h-7 w-auto" />
        </Link>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E5E3] p-10 w-full max-w-md">

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1A1C1B] mb-2">Verify your number</h1>
            <p className="text-sm text-[#727874]">
              Enter the code we sent to{' '}
              <span className="font-semibold text-[#1A1C1B]">+234 *** *** 4521</span>
            </p>
          </div>

          {/* OTP boxes */}
          <div className="flex gap-3 justify-center mb-6" onPaste={handlePaste}>
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={el => inputs.current[i] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(i, e.target.value)}
                onKeyDown={e => handleKeyDown(i, e)}
                className={`w-12 h-12 text-center text-lg font-bold rounded-xl bg-[#EFEFED] text-[#1A1C1B] outline-none transition-all ${
                  digit ? 'ring-2 ring-forest-green' : 'focus:ring-2 focus:ring-forest-green'
                }`}
              />
            ))}
          </div>

          {error && (
            <p className="text-center text-red-500 text-xs mb-4">{error}</p>
          )}

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!isFilled}
            className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all mb-6 ${
              isFilled
                ? 'bg-forest-green text-chalk-white hover:bg-[#172C24]'
                : 'bg-[#C2C8C3] text-[#727874] cursor-not-allowed'
            }`}
          >
            Continue
          </button>

          {/* Countdown and resend */}
          <div className="text-center space-y-1">
            <p className="text-sm text-[#727874] flex items-center justify-center gap-1.5">
              <span>⏱</span>
              <span>{`0:${countdown.toString().padStart(2, '0')}s`}</span>
            </p>
            <button
              onClick={handleResend}
              disabled={!canResend}
              className={`text-xs font-semibold uppercase tracking-widest transition-all ${
                canResend
                  ? 'text-forest-green hover:underline cursor-pointer'
                  : 'text-[#C2C8C3] cursor-not-allowed'
              }`}
            >
              Resend Code
            </button>
          </div>

          {/* Security badge */}
          <div className="flex justify-center mt-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-green bg-[#D0E8DB] px-4 py-1.5 rounded-full">
              Security Verification
            </span>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-8 py-4 text-xs text-[#727874]">
        <p>© 2026 Omi Marketplace. The Digital Curator.</p>
        <div className="flex gap-6">
          <Link href="/support" className="hover:text-[#1A1C1B]">Support</Link>
          <Link href="/privacy" className="hover:text-[#1A1C1B]">Privacy</Link>
        </div>
      </div>

    </div>
  )
}