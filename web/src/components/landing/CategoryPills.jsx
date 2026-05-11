'use client'

import { useState } from 'react'

const categories = [
  'ALL CATEGORIES',
  'FOOD',
  'PERFUME',
  'HAIR',
  'ELECTRONICS',
  'TEXTBOOKS',
  'SERVICES',
  'HOUSING',
]

export default function CategoryPills() {
  const [active, setActive] = useState('ALL CATEGORIES')

  return (
   <section className="px-16 pb-16 pt-8" style={{ backgroundColor: '#F4F4F2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((cat) => (
          <button
  key={cat}
  onClick={() => setActive(cat)}
  className={`px-4 py-2 rounded-pill text-body-small font-semibold whitespace-nowrap transition-colors ${
    active === cat
      ? 'text-chalk-white'
      : 'border border-border text-text-secondary hover:text-text-primary'
  }`}
  style={active === cat ? { backgroundColor: '#172C24' } : {}}
>
  {cat}
</button>
          ))}
        </div>
      </div>
    </section>
  )
}