import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MonitorSmartphone, Server, Workflow } from 'lucide-react'

import { Card, CardContent, CardDescription, CardTitle } from './components/card'
import SectionUser from './components/section-user'
import SectionProjects from './components/section-projects'

export function App () {  
  return (
    <div className='w-full'>
      <SectionUser />
      
      <SectionProjects />

      <section className='w-full bg-base-gray-100 flex flex-col items-center gap-14 relative p-32 pt-20 '>
        <div className='flex flex-col items-center justify-center gap-2'>
          <span className='text-xl text-main-red font-incosolata'>Meus serviços</span>
          <h3 className='text-2xl font-bold text-base-gray-600 font-asap'>Como posso ajudar o seu negócio</h3>
        </div>

        <div className='grid grid-cols-3 gap-6 w-fit'>
          <Card>
            <MonitorSmartphone className='size-12 text-main-purple' />
            <CardContent>
              <CardTitle>Websites e Aplicativos</CardTitle>
              <CardDescription>Desenvolvimento de interfaces</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <Server className='size-12 text-main-yellow' />
            <CardContent>
              <CardTitle>API e banco de dados</CardTitle>
              <CardDescription>Criação de serviços do sistema </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <Workflow className='size-12 text-main-green' />
            <CardContent>
              <CardTitle>DevOps</CardTitle>
              <CardDescription>Gestão e infraestrutura da aplicação</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='w-full h-screen bg-base bg-cover bg-no-repeat flex flex-col items-center justify-center gap-12'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <span className='text-xl text-main-red font-incosolata'>Contato</span>
          <h3 className='text-2xl font-bold text-base-gray-600 font-asap'>Gostou do meu trabalho?</h3>
          <p className='text-base-gray-500 font-maven-pro'>Entre em contato ou acompanhe as minhas redes sociais!</p>
        </div>

        <ul className='w-96 space-y-4'>
          <li className='rounded-lg bg-base-gray-300 p-5'>
            <a href='https://linkedin.com/samsepi0ldev' className='flex items-center justify-between gap-3 hover:underline'>
              <Linkedin className='size-7 text-base-gray-400' />
              <span className='font-medium text-base-gray-500 flex-1 font-maven-pro'>Linkedin</span>
              <ArrowUpRight className='size-5 text-main-blue' />
            </a>
          </li>

          <li className='rounded-lg bg-base-gray-300 p-5'>
            <a href='https://instagram.com/eliveltonjps' className='flex items-center justify-between gap-3 hover:underline'>
              <Instagram className='size-7 text-base-gray-400' />
              <span className='font-medium text-base-gray-500 flex-1 font-maven-pro'>Instagram</span>
              <ArrowUpRight className='size-5 text-main-blue' />
            </a>
          </li>

          <li className='rounded-lg bg-base-gray-300 p-5'>
            <a href='https://github.com/samsepi0ldev' className='flex items-center justify-between gap-3 hover:underline'>
              <Github className='size-7 text-base-gray-400' />
              <span className='font-medium text-base-gray-500 flex-1 font-maven-pro'>Github</span>
              <ArrowUpRight className='size-5 text-main-blue' />
            </a>
          </li>

          <li className='rounded-lg bg-base-gray-300 p-5'>
            <a href='mailto://samsepi0ldev@gmail.com' className='flex items-center justify-between gap-3 hover:underline'>
              <Mail className='size-7 text-base-gray-400' />
              <span className='font-medium text-base-gray-500 flex-1 font-maven-pro'>Email</span>
              <ArrowUpRight className='size-5 text-main-blue' />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
