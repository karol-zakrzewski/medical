type Language = {
  name: string
}

export type Countries = {
  countries: Omit<Country, 'emoji' | 'languages'>[]
}

export type Country = {
  name: string
  code: string
  emoji: string
  languages: Language[]
}
