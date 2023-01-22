import React from 'react'

export default function Loading({ isLoading }: LoadingPropType) {
  if (!isLoading) return null
  return <p className='text-center text-gray-300'>Loading...</p>
}

type LoadingPropType = { isLoading: boolean }
