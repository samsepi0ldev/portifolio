import { useQuery } from '@tanstack/react-query'

import { api } from '../lib/api'

interface RepositoryCardProps {
  name: string
  description: string
  owner: string
}

interface RepoContent {
  name: string
  download_url: string
}

export default function RepositoryCard ({ name, description, owner }: RepositoryCardProps) {
  const { data } = useQuery({
    queryKey: ['repository-contents', name],
    queryFn: async (): Promise<{ repo_url: string }> => {
      const response = await api.get(`https://api.github.com/repos/${owner}/${name}/contents`)
      const arr = [] as RepoContent[]

      for (const value of response.data) {
        if (value.name.endsWith('.github')) {
          const r = await api.get(`https://api.github.com/repos/${owner}/${name}/contents/.github`)
          for (const v of r.data) {
            if (v.name.endsWith('.png')) {
              arr.push(v)
            }
          }
        } else if (value.name.endsWith('.png')) {
          arr.push(value)
        }
      }   

      return { repo_url: arr[0]?.download_url }
    }
  })
  return (
    <a href={`https://github.com/${owner}/${name}`} target='_blank' className='max-w-[330px] rounded-xl bg-base-gray-300 space-y-5 p-3 hover:scale-105 transition-transform'>
      <img src={data?.repo_url} className='w-full h-40' />
      <div className='space-y-2'>
        <span className='font-bold text-base-gray-600 font-asap'>
          {name}
        </span>
        <p className='text-sm text-base-gray-500 font-maven-pro truncate'>
          {description}
        </p>
      </div>
    </a>
  )
}
