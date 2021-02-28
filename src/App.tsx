import React from 'react'
import styles from './app.module.css'
import Radio from './components/Radio/Radio'
// import {stations} from './Data';

function App () {
  return (
    <div className={styles.app} data-test='component-app'>
      <Radio />
    </div>
  )
}

export default App
