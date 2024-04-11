import { Card } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto flex flex-col xl:flex-row gap-4 md:gap-8 p-4 xl:p-24">
      <Card width="w-full xl:w-2/5">
        <div className="flex flex-row xl:flex-col items-center gap-4 md:gap-8">
          <div className="image-wrapper w-20 h-20 xl:w-40 xl:h-40">
            <Image src="/avatar.png" alt="My avatar" fill={true} />
          </div>

          <div className="text-left xl:text-center">
            <h3 className="mb-1 md:mb-3">Adam Ajsaen</h3>
            <div className="px-2 py-1 ring-1 ring-gray-900/5 rounded-lg bg-gray-900/5  text-center">
              <p className="sub-header-3">Software Engineer</p>
            </div>
          </div>
        </div>
      </Card>

      <Card>Card: About me/ Resume</Card>
    </main>
  )
}
