import nextId from 'react-id-generator'

export interface StationType {
  stationName: string
  stationFrequency: string
  id: string
}

export const stations: StationType[] = [
  { stationName: 'Putin FM', stationFrequency: '66,6', id: nextId() },
  { stationName: 'Dribbble FM', stationFrequency: '101,2', id: nextId() },
  { stationName: 'Doge FM', stationFrequency: '99,4', id: nextId() },
  { stationName: 'Ballads FM', stationFrequency: '87,1', id: nextId() },
  { stationName: 'Maximum FM', stationFrequency: '142,2', id: nextId() }
]
