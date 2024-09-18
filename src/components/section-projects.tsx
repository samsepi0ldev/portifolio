import dayjs from 'dayjs'
import { useQuery } from '@tanstack/react-query'

import RepositoryCard from './repo-card'
import { api } from '../lib/api'

interface Repo {
  id: number
  name: string
  description: string
  owner: { login: string }
  updated_at: string
}

interface RepoContent {
  name: string
  download_url: any
}

export default function SectionProjects() {
  const { data: repos, isPending } = useQuery({
    queryKey: ['repositories'],
    queryFn: async () => {
      const response = await api.get<Repo[]>('https://api.github.com/users/samsepi0ldev/repos')
      const arr = []

      for (const repo of response.data) {
        const contents = await api.get<RepoContent[]>(`https://api.github.com/repos/samsepi0ldev/${repo.name}/contents`)

        for (const value of contents.data) {
          if (value.name.endsWith('.png') || value.name === '.github') {
            arr.push(repo)
          }
        }
      }

      const data = [...new Set(arr.sort((a, b) => {
        const isAfter = dayjs(a.updated_at).isAfter(dayjs(b.updated_at))
        if (isAfter) return -1
        else if (isAfter) return 1
        else return 0
      }))]

      return data
    }
  })

  return (
    <section className='w-full h-screen flex flex-col items-center gap-14 relative pt-16 px-32 pb-36'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <span className='text-xl text-main-red font-incosolata'>Meu trabalho</span>
        <h3 className='text-2xl font-bold text-base-gray-600 font-asap'>Veja os Projetos em destaques</h3>
      </div>

      <div className='grid grid-cols-3 auto-rows-[280px] gap-6'>
        {isPending && !repos ? (
          Array.from({ length: 6 }, (_, i) => (
            <div className='w-[330px] block rounded-xl bg-base-gray-300 space-y-5 p-3 animate-pulse' />
          ))
        ) : (
          repos?.filter((_, i) => i <= 5).map(repo => (
            <RepositoryCard
              key={repo.id}
              name={repo.name}
              owner={repo.owner.login}
              description={repo.description}
            />
          ))
        )}
      </div>
    </section>
  )
}
