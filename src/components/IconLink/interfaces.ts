import { ReactNode } from 'react'

export interface IconLinkProps {
  icon: ReactNode
  link: string
  download?: string | boolean
}
