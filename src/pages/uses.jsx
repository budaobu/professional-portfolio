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
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
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
            <Tool title="MacBook Pro (2015)">
              I have used this Macbook Pro for more than 9 years. 
              Maybe it should be retired, but it still works.
            </Tool>
            <Tool title="iPhone 14">
              I primarily use an iPhone 14, which combines powerful performance, 
              advanced camera features, and a sleek design.
            </Tool>
            <Tool title="Redmi Note 10 Pro">
              As my backup device, the Redmi Note 10 Pro offers a solid Android 
              experience at an affordable price.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Modao">
              For product prototyping, I rely on Modao, a comprehensive UI/UX 
              design tool that enables rapid and intuitive interface wireframing 
              and interactive prototype creation.
            </Tool>
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Typora">
              A minimalist yet powerful Markdown editor that provides a seamless 
              WYSIWYG writing experience. With real-time preview and a clean 
              interface, Typora transforms writing into a natural and enjoyable 
              process. Whether you&apos;re working on technical documentation, personal 
              notes, or blog posts, Typora offers a smooth writing environment 
              that simplifies markdown editing.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
