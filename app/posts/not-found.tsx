import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { buttonVariants } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <Alert className='my-4'>
        <AlertTriangle />
        <AlertTitle>Not Found</AlertTitle>
        <AlertDescription>Post not found.</AlertDescription>
        <Link href={'/'} className={buttonVariants({variant: "link"})}>Home</Link>
    </Alert>
  )
}
