import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  const content = (
    <>
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
      {href && (
        <Card.Cta>Check it out here</Card.Cta>
      )}
    </>
  )

  // 如果有 href，则将整个 Card 包裹在 a 标签里
  if (href) {
    return (
      <Card as="li" className="cursor-pointer">
        <a href={href} target="_blank" rel="noopener noreferrer nofollow" className="block">
          {content}
        </a>
      </Card>
    )
  }

  // 如果没有 href，正常显示 Card
  return <Card as="li">{content}</Card>
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Joey Hu</title>
        <meta
          name="description"
          content="Here’s a big list of all of my favorite stuff."
        />
      </Head>
      <SimpleLayout
        title="Here’s a big list of all of my favorite stuff."
        intro="This is my curated list of software, hardware, and gadgets that I rely on to stay on track with my work—or at least, pretend to. These are my top picks for productivity and creativity."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="MacBook Pro (2015)" href="https://u.jd.com/urou5Nl">
              I have used this Macbook Pro for more than 9 years. 
              Maybe it should be retired, but it still works.
            </Tool>
            <Tool title="iPhone 14" href="https://u.jd.com/uGouHqR">
              I primarily use an iPhone 14, which combines powerful performance,
              advanced camera features, and a sleek design.
            </Tool>
            <Tool title="Redmi Note 10 Pro" href="https://u.jd.com/ureinfK">
              As my backup device, the Redmi Note 10 Pro offers a solid Android
              experience at an affordable price.
            </Tool>
          </ToolsSection>
          <ToolsSection title="AI Platform">
            <Tool title="OpenAI">
              I use OpenAI to integrate advanced AI models into my projects, from
              natural language understanding to image generation. It provides
              powerful APIs that enhance automation and problem-solving capabilities.
            </Tool>

            <Tool title="Claude.ai">
              I use Claude.ai for seamless AI-powered conversations. Its advanced
              dialogue capabilities help me deliver personalized experiences and
              handle customer interactions effectively.
            </Tool>
          </ToolsSection>
          <ToolsSection title="DevOps Tools">
            <Tool title="v0.dev" href="https://v0.dev/">
              I use v0.dev to collaborate on turning my product ideas into reality.
              I submit development requests, and together we build and refine
              features, streamlining the entire product development process.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Modao" href="https://modao.cc/">
              For product prototyping, I rely on Modao, a comprehensive UI/UX 
              design tool that enables rapid and intuitive interface wireframing 
              and interactive prototype creation.
            </Tool>
          </ToolsSection>
          <ToolsSection title="SaaS">
            <Tool title="Zeabur" href="https://zeabur.com?referralCode=budaobu">
              I use Zeabur to quickly deploy and scale my applications without
              managing servers. It automates cloud infrastructure, letting me
              focus on development while saving time and reducing complexity.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Typora" href="https://typora.io/">
              I use Typora for seamless markdown editing. Its minimalist design and
              real-time preview make writing a smooth and enjoyable process, whether
              I&apos;m working on documentation, notes, or blog posts.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
