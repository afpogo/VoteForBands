import { useEffect, useState } from 'react';
import styles from '@/styles/styles.module.scss'
import ServiceAlert from './components/ServiceAlert';
import TableBands from './components/TableBands';
import BandSchedule from './components/BandSchedule';
import BandChart from './components/BandChart';

export default function Home() {
  return (
    <section className={styles.container}>
      <ServiceAlert />
      <h1 className={styles.title}>Heros Bands</h1>
      <div className="chartContainer">
        <BandChart />
      </div>
      <div className={styles.gridContainer}>
        <TableBands />
        <BandSchedule />
      </div>
    </section>
  )
}
