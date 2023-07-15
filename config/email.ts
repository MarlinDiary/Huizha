export const emailConfig = {
  from: 'hi@huizha.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://huizha.com`
      : 'http://localhost:3000',
}
