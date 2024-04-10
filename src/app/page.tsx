import { Card } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-lg mx-auto flex flex-col xl:flex-row gap-4 md:gap-8 p-4 xl:p-24">
      <Card width="w-full xl:w-2/5">Card: Personal details</Card>
      <Card>Card: About me/ Resume</Card>
    </main>
  )
}
