const VendorCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#2d3b33] px-5 py-10 md:px-10 md:py-15">
      {/* Hex pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill='none' stroke='%234a5d52' stroke-width='1' opacity='0.4'/%3E%3Cpath d='M30 52l25.98 15v30L30 112 4.02 97V67L30 52z' fill='none' stroke='%234a5d52' stroke-width='1' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 104px'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-300 flex-col items-center gap-8 rounded-[20px] bg-[#1e2e26] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.15)] md:flex-row md:items-center md:justify-between md:gap-10 md:p-15">
        <div className="flex-1 text-center md:max-w-150 md:text-left">
          <h2 className="mb-4 font-manrope text-[32px] font-bold leading-tight tracking-tight text-white md:text-[42px]">
            Are you a business near campus?
          </h2>
          <p className="mx-auto max-w-150 text-base leading-relaxed text-[#a3b5ab] md:mx-0">
            Reach 1,500+ verified UNIJOS students daily through our curated marketplace.
          </p>
        </div>

        <a
          href="#"
          className="inline-flex w-full shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-white px-8 py-4 font-manrope text-[15px] font-semibold text-[#1e2e26] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md md:w-auto"
        >
          Become a Vendor
        </a>
      </div>
    </section>
  );
};

export default VendorCTA;