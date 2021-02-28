import React, { useState, useEffect } from 'react'
import styles from './Radio.module.css'
import RadioCard from '../RadioCard/RadioCard'
import { StationType } from '../../Data'
import { Station, fetchStations } from '../../actions'
import { connect } from 'react-redux'
import { StoreState } from '../../reducers'

const Radio = (props: {
  stations: StationType[]
  fetchStations: () => Promise<any>
}): JSX.Element => {
  const [currentStation, setCurrentStation] = useState<string>('Dribbble FM')
  const [selectedItem, setSelectedItem] = useState<number | null>(1)
  const [nodeId, setNodeId] = useState<any>()

  // fetch data
  useEffect(() => {
    props.fetchStations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // toggle accordion content
  const toggleContent = (index: number): void => {
    if (selectedItem === index) {
      return setSelectedItem(null)
    } else {
      return setSelectedItem(index)
    }
  }

  // set clicked station name
  const stationHandler = (stationName: string): void => {
    setCurrentStation(stationName)
  }

  // nodeId - pass to accordion to invoke scrollintoview
  const nodeIdHandler = (id: string): void => {
    setNodeId(id)
  }

  return (
    <div className={styles.radio}>
      <RadioCard
        stations={props.stations}
        stationHandler={stationHandler}
        selectedItem={selectedItem}
        toggleContent={toggleContent}
        nodeIdHandler={nodeIdHandler}
        nodeId={nodeId}
      />

      <RadioCard
        stations={props.stations}
        stationHandler={stationHandler}
        addAccordion={true}
        currentStationName={currentStation}
        selectedItem={selectedItem}
        toggleContent={toggleContent}
        nodeIdHandler={nodeIdHandler}
        nodeId={nodeId}
      />
    </div>
  )
}

const mapstateToProps = (state: StoreState): { stations: Station[] } => {
  return { stations: state.stations }
}

export default connect(mapstateToProps, { fetchStations })(Radio)
