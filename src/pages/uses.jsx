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
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="MacBook Pro (2015)">
              I have used this Macbook Pro for more than 9 years. Maybe it should be retired, but it still works..
            </Tool>
            <Tool title="iPhone 14">
              I primarily use an iPhone 14, which combines powerful performance, advanced camera features, and a sleek design..
            </Tool>
            <Tool title="IBM Model M SSK Industrial Keyboard">
              They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main.
            </Tool>
            <Tool title="Redmi Note 10 Pro">
              As my backup device, the Redmi Note 10 Pro offers a solid Android experience at an affordable price.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Modao">
              For product prototyping, I rely on Modao, a comprehensive UI/UX design tool that enables rapid and intuitive interface wireframing and interactive prototype creation.
            </Tool>
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Typora">
              A minimalist yet powerful Markdown editor that provides a seamless WYSIWYG writing experience. With real-time preview and a clean interface, Typora transforms writing into a natural and enjoyable process. Whether you're working on technical documentation, personal notes, or blog posts, Typora offers a smooth writing environment that simplifies markdown editing.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
