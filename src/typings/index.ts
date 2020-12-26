import { type } from 'os'

export type INDEX = number

export type STATUS = 'input' | 'result'

export type CATEGORY = {
  name: string
  value: number
}

export type KEYWORD = {
  name: string
  value: number
}

export type KEYWORDS = KEYWORD[]

export type CATEGORYS = CATEGORY[]

export type ANALYZER_DATA = {
  category: CATEGORYS
  keyword: KEYWORDS
}
