import React, { useState } from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { IRepo } from '../models/models'
import { useGithubActions } from '../store/github/github.slice'

export default function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useGithubActions()
  const { favourites } = useAppSelector(state => state.github)
  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsFav(true)
    addFavourite(repo.html_url)
  }
  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsFav(false)
    removeFavourite(repo.html_url)
  }
  return (
    <a
      href={repo.html_url}
      className='flex justify-between border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all cursor-pointer'
    >
      <div>
        <h2 className='text-large font-bold'>{repo.full_name}</h2>
        <p className='text-sm'>
          Forks: <span className='font-bold mr-2'>{repo.forks}</span>
          Watchers: <span className='font-bold'>{repo.watchers}</span>
        </p>
        <p className='text-sm font-thin'>{repo?.description}</p>
      </div>
      {isFav ? (
        <button
          className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all'
          onClick={removeFromFavourite}
        >
          Remove
        </button>
      ) : (
        <button
          className='py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all'
          onClick={addToFavourite}
        >
          Add
        </button>
      )}
    </a>
  )
}
