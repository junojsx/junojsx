export interface Project {
  id: string
  name: string
  description: string
  techTags: string[]
  liveUrl: string
  repoUrl: string
}

export interface TechItem {
  name: string
  iconUrl: string
  category: 'language' | 'framework' | 'tool' | 'platform'
}

export interface NavLink {
  label: string
  href: string
}
