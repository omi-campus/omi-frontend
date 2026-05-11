export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-chalk-white px-16 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">
        {[
          {
            num: '01',
            title: 'Sign up & verify',
            desc: 'Use your UNIJOS email or student ID to access the exclusive campus network.',
          },
          {
            num: '02',
            title: 'Browse or list',
            desc: 'Find exactly what you need or turn your unused items into cash in minutes.',
          },
          {
            num: '03',
            title: 'Connect & transact',
            desc: 'Secure in-app messaging and safe meet-up points within the campus grounds.',
          },
        ].map(({ num, title, desc }) => (
          <div key={num}>
            <span className="text-h1 font-bold text-text-primary">{num}</span>
            <h3 className="text-h3 font-bold text-text-primary mt-2">{title}</h3>
            <p className="text-body text-text-secondary mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}