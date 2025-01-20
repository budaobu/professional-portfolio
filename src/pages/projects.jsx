import Image from 'next/future/image'
import Head from 'next/head'

import { useState } from 'react';
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Link, GithubLogo } from '@phosphor-icons/react'

const projects = [
  {
    name: 'Image Watermark',
    description:
      "Add watermarks to your images securely with no internet needed! Protect sensitive documents like IDs, driver’s licenses, and passports locally on your device.",
    link: {
      href: 'https://image-watermark-at5.pages.dev/',
      label: 'Watermark',
    },
  },
  {
    name: 'Fuel or Elec Car',
    description:
      "A tool to help users decide between gas or electric cars by considering factors like annual mileage, charging conditions, and usage scenarios.",
    link: {
      href: 'https://fuel-or-elec-car.dakaiai.app/',
      label: 'Car Purchase Decision',
    },
  },
  {
    name: 'ASN CN',
    description:
      "Claude-generated Python program to fetch daily ASN CN data from bgp.he.net and whois.ipip.net.",
    link: {
      href: 'https://github.com/budaobu/rules/blob/main/lists/cn_asn.list',
      label: 'ASN CN Data Fetcher',
    },
    // logo: youphoria,
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Jeoy Hu</title>
        <meta
          name="description"
          content="What I've done and what I'm doing."
        />
      </Head>
      <SimpleLayout
        title="Projects"
        intro="What I&apos;ve done and what I&apos;m doing."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={`https://favicon.im/${project.link.href}`}
                  alt={`${project.name} favicon`}
                  className="h-8 w-8 rounded-full"
                  unoptimized
                  onError={(e) => {
                    e.currentTarget.src = '';  // Clear the image source
                    const icon = <GithubLogo size={32} strokeWidth={1.5} className="h-8 w-8 text-zinc-400" />;
                    e.currentTarget.parentElement.appendChild(icon);  // Append the icon to the image's parent element
                  }}
                  key={`favicon-${project.name}`}
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <Link className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
