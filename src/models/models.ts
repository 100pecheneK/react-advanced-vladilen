export interface IUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  score: number
}
export interface IOwner {
  id: number
  name: string
  login: string
  avatar_url: string
  url: string
}
export interface IRepo {
  id: number
  owner: IOwner
  name: string
  html_url: string
  full_name: string
  forks: number
  watchers: number
  description: string
}

export interface GithubApiResponse<I> {
  total_count: number
  incomplete_results: boolean
  items: I[]
}
