import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'AccessiDash',
    description:
      'A dashboard tool that audits web pages for WCAG compliance and generates actionable accessibility reports.',
    techTags: ['React', 'TypeScript', 'Node.js', 'axe-core'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/accessidash',
  },
  {
    id: 'project-2',
    name: 'FocusCraft',
    description:
      'A component library of fully accessible, keyboard-navigable UI primitives built with React and ARIA patterns.',
    techTags: ['React', 'TypeScript', 'Storybook', 'Radix UI'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/focuscraft',
  },
  {
    id: 'project-3',
    name: 'ContrastCheck',
    description:
      'A browser extension that visualizes color contrast ratios across any webpage and flags WCAG failures in real time.',
    techTags: ['JavaScript', 'Chrome Extension API', 'CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/contrastcheck',
  },
]
