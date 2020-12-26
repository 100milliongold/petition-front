import { INDEX, STATUS, ANALYZER_DATA } from 'typings'

export interface IReducer {
  start?: INDEX
  end?: INDEX
  status?: STATUS
  analyzer_data?: ANALYZER_DATA
}
