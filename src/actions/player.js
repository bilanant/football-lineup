import axios from 'axios'
import { xml2json } from 'xml-js'

import { URL, PLAYER_LIST, PLAYER_LIST_ERROR } from './types';

export const getPlayerList = (page = 1) => async dispatch => {
  try {
    const xmlResponse = await axios.get(`${URL}${page}.xml`);
    const transformedData = JSON.parse(xml2json(xmlResponse.data, { compact: true, spaces: 4 }))
    dispatch(
      {
        type: PLAYER_LIST,
        payload: transformedData
      }
    )
  } catch (error) {
    dispatch({
      type: PLAYER_LIST_ERROR,
      payload: 'Something went wrong fetching data!'
    })
  }
}