import { type } from 'os'

export type INDEX = number

export type STATUS = 'input' | 'result'

export type CATEGORY = {
  name: string
  value: number
}

export type CATEGORYS = CATEGORY[]
