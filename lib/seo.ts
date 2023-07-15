export const seo = {
  title: '绘札',
  description:
    '欢迎来到「绘札」，我的精神角落，我会在这里倾注热情、分享兴趣和记录灵感。目前，我正在准备 GMAT 考试和留学申请，其中点滴的努力和得失也将被如数呈现。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
