import React from 'react'
import config from '../../utils/config.js'
import styles from './Footer.css'

const Footer = () => (<div className={styles.footer}>
  {config.footerText}
</div>)

export default Footer