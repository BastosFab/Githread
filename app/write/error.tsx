'use client' // Error components must be Client Components
 
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Alert className='my-4'>
        <AlertTriangle />
        <AlertTitle>Not Logged</AlertTitle>
        <AlertDescription>You must be logged in to access this page.</AlertDescription>
    </Alert>
  )
}