import Image, { type StaticImageData } from 'next/image'
import React from 'react'

import { BriefcaseIcon } from '~/assets'
import eightNinthsLogo from '~/assets/company/8ninths.jpeg'
import abletiveLogo from '~/assets/company/abletive.png'
import vvsLogo from '~/assets/company/vvs.png'
import zolplayLogo from '~/assets/company/zolplay.png'

type Resume = {
  company: string
  title: string
  start: string | { label: string; dateTime: number }
  end: string | { label: string; dateTime: number }
  logo: StaticImageData
}
const resume: Resume[] = [
  {
    company: '豆瓣电影',
    title: '1112 部',
    logo: zolplayLogo,
    start: '2019',
    end: {
      label: '至今',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: '网站开发',
    title: '10 年',
    logo: vvsLogo,
    start: '2014',
    end: {
      label: '至今',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: '雅思考试',
    title: '7 分',
    logo: eightNinthsLogo,
    start: '2020',
    end: '2023',
  },
  {
    company: '推特粉丝',
    title: '86 人',
    logo: abletiveLogo,
    start: '2022',
    end: '2023',
  },
]

function getRoleDate(date: Resume['start'] | Resume['end'], label = true) {
  if (typeof date === 'string') {
    return date
  }

  if (label) {
    return date.label
  } else {
    return String(date.dateTime)
  }
}

export function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        <span className="ml-2">数字人生</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={role.company}
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">公司</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">职位</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">日期</dt>
              <dd
                className="ml-auto text-xs text-zinc-500/80 dark:text-zinc-400/80"
                aria-label={`${getRoleDate(role.start)} 到 ${getRoleDate(
                  role.end
                )}`}
              >
                <time dateTime={getRoleDate(role.start, false)}>
                  {getRoleDate(role.start)}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={getRoleDate(role.end, false)}>
                  {getRoleDate(role.end)}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}
