import Image from 'next/image'

const phoneImages = [
  '/images/phones/phone-1.png',
  '/images/phones/phone-2.png',
  '/images/phones/phone-3.png',
]

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.72-3.06 1.64-.68.82-1.27 2.15-1.11 3.24 1.18.09 2.38-.59 3.1-1.77z" />
  </svg>
)

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
  </svg>
)

export default function AppDownload() {
  return (
    <section className="relative flex items-center justify-between gap-8 overflow-hidden bg-[#F2F2F0] px-16 py-2">
      {/* Left Content */}
      <div className="z-10 max-w-md shrink-0">
        <span className="text-sm font-medium text-[#0A0A0A]/60">
          Start Today
        </span>
        <h2 className="mt-3 text-[42px] font-bold leading-[1.15] tracking-tight text-[#0A0A0A]">
          Download Our
          <br />
          Online Market
          <br />
          App Today.
        </h2>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2.5 rounded-[10px] bg-forest-green px-5 py-3 text-white transition-opacity hover:opacity-90"
          >
            <AppleIcon />
            <div className="flex flex-col leading-none">
              <span className="text-[10px] opacity-80">Download on the</span>
              <span className="text-sm font-semibold">Apple Store</span>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-2.5 rounded-[10px] bg-forest-green px-5 py-3 text-white transition-opacity hover:opacity-90"
          >
            <PlayStoreIcon />
            <div className="flex flex-col leading-none">
              <span className="text-[10px] opacity-80">Download on the</span>
              <span className="text-sm font-semibold">Play Store</span>
            </div>
          </a>
        </div>
      </div>

      {/* Right Content - Phone Mockups */}
      <div className="relative z-10 flex shrink-0 items-center overflow-visible">
        {/* Left Phone */}
        <div className="relative h-170 w-120 shrink-0 -mr-60 transition-transform duration-300 ease-out hover:-translate-y-3">
          <Image
            src={phoneImages[0]}
            alt="App preview"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Center Phone */}
        <div className="relative z-10 h-170 w-100 shrink-0 -mr-60 transition-transform duration-300 ease-out hover:-translate-y-3">
          <Image
            src={phoneImages[1]}
            alt="App logo screen"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Phone */}
        <div className="relative h-170 w-85 shrink-0 transition-transform duration-300 ease-out hover:-translate-y-3">
          <Image
            src={phoneImages[2]}
            alt="App preview"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}