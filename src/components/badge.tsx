import React from 'react'
import { twMerge } from 'tailwind-merge'

interface BadgeProps extends React.ComponentProps<'span'> { }

export default function Badge ({ className, ...props }: BadgeProps) {
  return (
    <span
      className={twMerge(
        'px-4 py-2 rounded-full bg-base-gray-300 flex items-center justify-center gap-2 text-base-gray-500 font-maven-pro',
        className
      )}
      {...props}
    />
  )
}
