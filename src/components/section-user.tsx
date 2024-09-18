import { ChevronsDown } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'

import { CSSIcon, GithubIcon, HTMLIcon, JavascriptIcon, NodeJsIcon, ReactIcon } from './icons'
import { api } from '../lib/api'
import Badge from './badge'

export interface User {
  avatar_url: string
  name: string
  bio: string
}

const SKILLS = [
  { name: 'Github', icon: GithubIcon },
  { name: 'HTML', icon: HTMLIcon },
  { name: 'CSS', icon: CSSIcon },
  { name: 'Javascript', icon: JavascriptIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: NodeJsIcon }
]

export default function SectionUser () {
  const { data: user } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await api.get<User>('https://api.github.com/users/samsepi0ldev')
      return response.data
    }
  })

  if (!user) return

  return (
    <section className='w-full h-screen bg-base bg-cover bg-no-repeat flex flex-col items-center justify-center relative'>
      <div className='space-y-20 flex flex-col items-center justify-center'>
        <div className='w-full max-w-2xl flex flex-col items-center justify-center gap-y-14'>
          <img src={user.avatar_url} className='rounded-full size-28 ring-2 ring-main-red ring-offset-4 ring-offset-base-gray-200' />

          <div className='flex flex-col gap-2'>
            <p className='text-lg text-center font-incosolata'>
              Hello World! Meu nome é <span className='text-main-red'>{user.name}</span> e sou
            </p>

            <h1 className='text-5xl font-bold text-center font-asap'>Desenvolvedor Fullstack</h1>

            <p className='text-sm text-base-gray-400 text-center text-balance mt-3 block font-maven-pro'>
              {user.bio} Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
            </p>
          </div>
        </div>

        <div className='w-full flex items-center gap-4 justify-center'>
          {SKILLS.map(({ name, icon: Icon }, i) => (
            <Badge key={i}>
              <Icon />
              {name}
            </Badge>
          ))}
        </div>
      </div>
      <button className='absolute left-1/2 -translate-x-1/2 bottom-14'>
        <ChevronsDown className='size-8 text-base-gray-400' />
      </button>
    </section>
  )
}
