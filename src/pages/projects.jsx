import Image from 'next/future/image'
import Head from 'next/head'
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
            <li key={project.name}>
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-48 w-full block rounded-3xl cursor-pointer overflow-hidden shadow-[rgba(0,_0,_0,_0.15)_0px_20px_40px_-12px] bg-card/20 p-6 ring-2 hover:ring-3 ring-zinc-900/5 dark:ring-zinc-800 transition-all duration-500 hover:ring-zinc-600/20 dark:hover:ring-zinc-700"
              >
                <div className="relative flex h-full w-full flex-col justify-between">
                  {/* Icon */}
                  <div className="size-10 origin-top-left pt-3 duration-500 group-hover:scale-75 group-hover:pt-0">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                        src={`https://favicon.im/${project.link.href}`}
                        alt={`${project.name} favicon`}
                        className="h-8 w-8 rounded-full"
                        unoptimized
                        onError={(e) => {
                          e.currentTarget.src = '';
                          e.currentTarget.style.display = 'none';
                          const icon = document.createElement('div');
                          icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-8 w-8 text-zinc-400"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>';
                          e.currentTarget.parentElement.appendChild(icon.firstChild);
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col text-base transition-transform duration-500 group-hover:-translate-y-6">
                    <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      {project.name}
                    </span>
                    <span className="text-base text-balance text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </span>
                  </div>

                  {/* CTA Text */}
                  <div className="pointer-events-none absolute -bottom-20 h-10 w-full text-base font-semibold transition-all duration-500 group-hover:-bottom-5 text-zinc-600 dark:text-zinc-400">
                    {project.link.label}
                  </div>

                  {/* CTA Icon */}
                  <span className="pointer-events-none absolute h-10 bottom-10 -right-20 scale-50 transition-all duration-300 group-hover:-bottom-5 group-hover:-right-1 group-hover:scale-100">
                    <ArrowUpRight className="text-zinc-600 dark:text-zinc-400" />
                  </span>

                  {/* Background Shapes */}
                  <span className="pointer-events-none absolute -left-[32rem] -top-[32rem] block size-[30rem] origin-bottom-right translate-x-0 translate-y-0 transform rounded-full opacity-10 transition-all duration-300 group-hover:-left-[7rem] group-hover:-top-[10rem] bg-zinc-300 dark:bg-zinc-800" />
                  <span className="pointer-events-none absolute bottom-0 right-0 mb-32 block size-[30rem] origin-top-left translate-x-[56rem] translate-y-[23rem] rotate-45 transform rounded-[15rem] opacity-10 transition duration-300 group-hover:rotate-90 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-200 via-zinc-700 to-zinc-800" />
                  <span className="pointer-events-none absolute -bottom-0 -right-5 mb-32 block size-[30rem] origin-top-left translate-x-[56rem] translate-y-[23rem] rotate-45 transform rounded-[15rem] opacity-10 transition duration-300 group-hover:rotate-90 delay-75 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-200 via-zinc-700 to-zinc-800" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
