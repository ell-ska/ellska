import About from './About'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import type { default as AboutProps } from '@/sanity/types/about'

type ContentProps = { activeSection: string } & AboutProps

const ContentSwitch = ({
  activeSection,
  long_description,
  skills,
  education,
  contact,
}: ContentProps) => {
  switch (activeSection) {
    case 'about':
      return <About long_description={long_description} />
    case 'skills':
      return <Skills skills={skills} />
    case 'education':
      return <Education education={education} />
    case 'contact':
      return <Contact contact={contact} />
  }
}

export default ContentSwitch
