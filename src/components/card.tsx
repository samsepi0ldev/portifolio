import React from 'react'
import { twMerge } from 'tailwind-merge'

export function Card ({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'w-72 rounded-xl border border-base-gray-200 p-5 space-y-5'
      )}
      {...props}
    />
  )
}

export function CardContent ({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'flex flex-col',
        className
      )}
      {...props}
    />
  )
}

export function CardTitle ({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={twMerge(
      'text-base-gray-600 font-bold font-asap',
      className
    )}
      {...props}
    />
  )
}

export function CardDescription ({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span className={twMerge(
      'text-sm text-base-gray-500 font-maven-pro',
      className
    )}
      {...props}
    />
  )
}
