'use client'

import { useTransition } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import type { ComponentProps, ReactNode } from 'react'

export type CustomLinkProps = ComponentProps<typeof NextLink> & {
  beforeNavigate?: () => void
  afterNavigate?: () => void
  children: ReactNode
}

export function Link({
  href,
  children,
  replace,
  beforeNavigate,
  afterNavigate,
  ...rest
}: CustomLinkProps) {
  const router = useRouter()

  // Expose loading state to the parent component
  // See: https://github.com/vercel/next.js/discussions/41934#discussioncomment-8996669
  const [, startTransition] = useTransition()

  return (
    <NextLink
      href={href}
      onClick={(e) => {
        e.preventDefault()
        beforeNavigate?.()
        startTransition(() => {
          const url = href.toString()
          if (replace) {
            router.replace(url)
          } else {
            router.push(url)
          }
          afterNavigate?.()
        })
      }}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
