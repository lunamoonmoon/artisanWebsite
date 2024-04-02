'use client'

import { useRouter } from 'next/navigation'

export default function navbar() {
  const router = useRouter()

  return (
    <div className="nav-bar">
       <div className="logo">
        <img />
       </div>
       <div className="nav-buttons">
        <button
          type='button'
          onClick={() => router.push('/about')}
        >
          About
        </button>
       </div>
    </div>
  );
}