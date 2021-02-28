import React from 'react'
import { StationType } from '../../Data'
import styles from './RadioCard.module.css'
import backArrow from '../../images/back-arrow.png'
import switchButton from '../../images/switch.png'
import { motion } from 'framer-motion'
import Accordion from '../Accordion/Accordion'

interface propsType {
  stations: StationType[]
  stationHandler: (stationName: string) => void
  addAccordion?: boolean
  currentStationName?: string
  selectedItem: number | null
  toggleContent: (index: number) => void
  nodeIdHandler: (id: string) => void
  nodeId: string
}

const RadioStationCard = (props: propsType): JSX.Element => {
  // fake click button
  const emptyClickHandler = (): void => {
    console.log('click')
  }
  // render radio stations
  const renderList = (): JSX.Element[] => {
    return props.stations.map((station: StationType, index: number) => {
      return (
        <div
          key={index}
          id={station.id}
          className={styles.stationDetails}
          onClick={() => {
            props.toggleContent(index)
            props.stationHandler(station.stationName)
            props.nodeIdHandler(station.id)
          }}
        >
          <p>{station.stationName}</p>
          <span>{station.stationFrequency}</span>
        </div>
      )
    })
  }

  return (
    <div className={styles.radioCard} data-test='component-radioCard'>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img src={backArrow} alt='back arrow' onClick={emptyClickHandler} />
          </motion.div>
          <h1>STATIONS</h1>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img
              src={switchButton}
              alt='switch button'
              onClick={emptyClickHandler}
            />
          </motion.div>
        </div>
      </div>
      <div className={styles.body}>
        {props.addAccordion ? (
          <Accordion
            stations={props.stations}
            stationHandler={props.stationHandler}
            selectedItem={props.selectedItem}
            toggleContent={props.toggleContent}
            nodeId={props.nodeId}
          />
        ) : (
          renderList()
        )}
      </div>
      <div className={styles.footer}>
        {props.currentStationName && (
          <div>
            <h3>CURRENTLY PLAYING</h3>
            <p>{props.currentStationName}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RadioStationCard
