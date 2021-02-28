import React, { useEffect, useState } from 'react'
import styles from './Accordion.module.css'
import { motion } from 'framer-motion'
import minusIcon from '../../images/minus.png'
import plusIcon from '../../images/plus.png'
import { StationType } from '../../Data'
import spotifyImage from '../../images/spotify.webp'

interface propsType {
  stations: StationType[]
  stationHandler: (stationName: string) => void
  selectedItem: number | null
  toggleContent: (index: number) => void
  nodeId: string
}

const Accordion = (props: propsType): JSX.Element => {
  const [node, setNode] = useState<string>()

  // toggle content
  const toggleContainer = (index: any): void => {
    props.toggleContent(index)
    setNode(`id${index + 1}`)
  }

  // empty click handler
  const emptyClickHandler = (): void => {
    console.log('click')
  }

  // scroll into view
  useEffect(() => {
    setNode(props.nodeId)
  }, [props.nodeId])

  const refs = props.stations.reduce((acc: any, value: any) => {
    acc[value.id] = React.createRef()
    return acc
  }, {})

  useEffect(() => {
    if (node && refs) {
      refs[node].current.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node])

  const renderList = () => {
    return props.stations.map((station: StationType, index: number) => {
      return (
        <div className={styles.container} key={index} ref={refs[station.id]}>
          <div
            className={
              props.selectedItem === index
                ? `${styles.content} ${styles.active}`
                : `${styles.content}`
            }
          >
            <div className={styles.imageContainer}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img
                  src={minusIcon}
                  alt='minus icon'
                  className={styles.icon}
                  onClick={emptyClickHandler}
                />
              </motion.div>
              <div className={styles.imageContainerCenter}>
                <img
                  src={spotifyImage}
                  alt='spotify'
                  className={styles.spotifyImage}
                  onClick={(): void => toggleContainer(index)}
                />
              </div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img
                  src={plusIcon}
                  alt='minus icon'
                  className={styles.icon}
                  onClick={emptyClickHandler}
                />
              </motion.div>
            </div>
          </div>
          <div
            key={index}
            className={styles.stationDetails}
            onClick={e => {
              toggleContainer(index)
              props.stationHandler(station.stationName)
            }}
          >
            <p>{station.stationName}</p>
            <span>{station.stationFrequency}</span>
          </div>
        </div>
      )
    })
  }

  return <div>{renderList()}</div>
}

export default Accordion
