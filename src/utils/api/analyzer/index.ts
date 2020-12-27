import axios from 'axios'
import { INDEX, ANALYZER_DATA } from 'typings'
/**
 *
 */
export const getAnalyzer = async (
  start: INDEX,
  end: INDEX
): Promise<ANALYZER_DATA> => {
  try {
    const res = await axios.get(`/api/v1/petion/analyzer/${start}/${end}`)
    return res.data
  } catch (error) {
    throw error
  }
}
