export default function Error({isError}: ErrorPropsType) {
	if (!isError) return null
	return <p className="text-center text-red-600">Error...</p>
}
type ErrorPropsType = {
	isError: boolean
}
