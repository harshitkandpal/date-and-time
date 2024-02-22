import React from 'react'
import styles from './MainContainer.module.css'

import DateNtime from './DateNtime'


function MainContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.DateNtime_container}>
        <DateNtime/>
      </div>
    </div>
  )
}

export default MainContainer
