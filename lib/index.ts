export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://huizha.com'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
