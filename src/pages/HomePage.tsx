import { useEffect, useState } from 'react'
import {
	useLazyGetUserReposQuery,
	useSearchUserQuery,
} from '../store/github/github-api'
import Error from '../components/Error'
import { useDebounce } from '../hooks/useDebounce'
import Loading from '../components/Loading'
import RepoCard from '../components/RepoCard'
import PageContainer from '../components/Container'

export default function HomePage() {
	const [search, setSearch] = useState('100pecheneK')
	const [dropdown, setDropdown] = useState(false)
	const debounced = useDebounce(search, 500)
	const {
		isLoading,
		isError,
		data: users,
	} = useSearchUserQuery(debounced, {
		skip: debounced.length === 0,
		refetchOnFocus: true,
	})
	const [
		fetchRepos,
		{ isLoading: areReposLoading, isError: areReposError, data: repos },
	] = useLazyGetUserReposQuery()

	useEffect(() => {
		setDropdown(!!(debounced.length && users?.length))
	}, [debounced, users])
	const clickHandler = (username: string) => {
		setDropdown(false)
		fetchRepos(username)
	}
	return (
		<PageContainer>
			<Error isError={isError} />

			<div className="relative w-[560px]">
				<input
					type="text"
					className="border py-2 px-4 w-full h-[42] mb-2"
					placeholder="Search by username..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				{dropdown && (
					<ul className="list-none absolute top-[42] left-0 right-0 max-h-[200px] shadow-md overflow-y-scroll">
						<Loading isLoading={isLoading} />
						{users?.map((user) => (
							<li
								key={user.id}
								onClick={() => clickHandler(user.login)}
								className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
							>
								{user.login}
							</li>
						))}
					</ul>
				)}
				<div className="container">
					{<Error isError={areReposError} />}
					{<Loading isLoading={areReposLoading} />}
					{repos?.map((repo) => (
						<RepoCard repo={repo} key={repo.id} />
					))}
				</div>
			</div>
		</PageContainer>
	)
}
