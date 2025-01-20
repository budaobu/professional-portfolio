import Image from 'next/future/image'
import Head from 'next/head'
import { useState } from 'react'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Link, FolderGit2, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Image Watermark',
    description:
      "Add watermarks to your images securely with no internet needed! Protect sensitive documents like IDs, driver's licenses, and passports locally on your device.",
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
            <Card 
              as="li" 
              key={project.name}
              className="group relative h-48 overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-xl"
            >
              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                {/* Icon Section */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 transition-transform duration-500 origin-top-left group-hover:scale-75">
                  <Image
                    src={`https://favicon.im/${project.link.href}`}
                    alt={`${project.name} favicon`}
                    className="h-8 w-8 rounded-full"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.src = '';
                      const icon = document.createElement('div');
                      icon.innerHTML = '<svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" className="h-8 w-8 text-zinc-400"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>';
                      e.currentTarget.parentElement.appendChild(icon.firstChild);
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-6">
                  <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={project.link.href} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </Card.Link>
                  </h2>
                  <Card.Description className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </Card.Description>
                </div>

                {/* Link Section */}
                <div className="mt-6 flex items-center text-sm font-medium text-zinc-400 transition-all duration-500 group-hover:translate-y-6 dark:text-zinc-200">
                  <Link size={20} strokeWidth={1.25} className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                  <ArrowUpRight 
                    className="ml-2 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                    size={16}
                  />
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-zinc-100 opacity-0 transition-all duration-500 group-hover:opacity-10 dark:bg-zinc-800" />
                  <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-zinc-100 opacity-0 transition-all duration-500 group-hover:opacity-10 dark:bg-zinc-800" />
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
