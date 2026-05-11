import Image from 'next/image'

const badgeStyles = {
  'NEW CONDITION': { bg: '#D1FAE5', text: '#065F46' },
  'GENTLY USED': { bg: '#E5E7EB', text: '#374151' },
  'FRESHLY MADE': { bg: '#FEF3C7', text: '#92400E' },
  'LIMITED EDITION': { bg: '#EDE9FE', text: '#5B21B6' },
  'SELF-CONTAINED': { bg: '#DBEAFE', text: '#1E40AF' },
  'AT-HOME SERVICE': { bg: '#FCE7F3', text: '#9D174D' },
}

const listings = [
  {
    id: 1,
    title: 'International relations textbook',
    price: '₦12,500',
    category: 'TEXTBOOKS',
    badge: 'NEW CONDITION',
    seller: 'Tunde Joshua',
    image: '/images/listings/listing-1.jpg',
  },
  {
    id: 2,
    title: 'Sony WH-1000XM4',
    price: '₦85,000',
    category: 'ELECTRONICS',
    badge: 'GENTLY USED',
    seller: 'Sarah Omotola',
    image: '/images/listings/listing-2.jpg',
  },
  {
    id: 3,
    title: 'Moi Moi',
    price: '₦2,500',
    category: 'FOOD',
    badge: 'FRESHLY MADE',
    seller: 'Ibrahim Cookery',
    image: '/images/listings/listing-3.jpg',
  },
  {
    id: 4,
    title: 'Oud Wood Essence',
    price: '₦45,000',
    category: 'PERFUME',
    badge: 'LIMITED EDITION',
    seller: 'Grace Scent',
    image: '/images/listings/listing-4.jpg',
  },
  {
    id: 5,
    title: 'Lan Street Studio',
    price: '₦150k /yr',
    category: 'HOUSING',
    badge: 'SELF-CONTAINED',
    seller: 'Landlord Agency',
    image: '/images/listings/listing-5.jpg',
  },
  {
    id: 6,
    title: 'Premium Haircut',
    price: '₦3,500',
    category: 'SERVICES',
    badge: 'AT-HOME SERVICE',
    seller: 'Dave Buswong',
    image: '/images/listings/listing-6.jpg',
  },
]

export default function TrendingListings() {
  return (
    <section className="bg-chalk-white px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h2 font-bold text-text-primary mb-8">Trending on Campus</h2>
        <div className="grid grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-card shadow-card overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  fill
                  className="object-cover"
                />
           <span
              className="absolute top-2 left-2 text-caption font-semibold px-1.5 py-0.5 rounded-pill"
                 style={{
                     backgroundColor: badgeStyles[listing.badge]?.bg,
                     color: badgeStyles[listing.badge]?.text,
                     fontSize: '9px',
                    }}
                      >
                   {listing.badge}
            </span>     
            </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-caption text-text-muted font-semibold tracking-wide">
                    {listing.category}
                  </span>
                  <span className="text-body font-bold text-text-primary">
                    {listing.price}
                  </span>
                </div>
                <h3 className="text-body font-semibold text-text-primary truncate">
                  {listing.title}
                </h3>
                <div className="flex items-center gap-2 mt-3">
                 <div className="w-6 h-6 rounded-full bg-surface-light shrink-0 flex items-center justify-center overflow-hidden">
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="w-4 h-4 text-text-muted"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
</div>
                  <span className="text-body-small text-text-secondary truncate">
                    {listing.seller}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}