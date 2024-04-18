'use client'

import { redirect } from 'next/navigation'

export default function NotFound() {
  return redirect('/404')
}
