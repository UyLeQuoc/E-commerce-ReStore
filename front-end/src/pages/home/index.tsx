import FullLayout from '@/FullLayout'

import heroImage from "@/assets/hero.jpg"

export default function HomePage() {
  return (
    <FullLayout>
      
      <div className=''>
         <div>
          <img
              src={heroImage}
              alt='hero'
              className='w-full h-full object-cover aspect-video'
          />
         </div>
      </div>
    </FullLayout>
  )
}
