import React from 'react'
import PageContainer from '../components/Container'
import { useAppSelector } from '../hooks/useAppSelector'

export default function FavouritesPage() {
  const { favourites } = useAppSelector(state => state.github)

  return (
    <PageContainer>
      {favourites.length ? (
        <ul className='list-none'>
          {favourites.map(fav => (
            <li key={fav}>
              <a href={fav}>{fav}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No repos</p>
      )}
    </PageContainer>
  )
}
