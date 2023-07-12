import { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { ISocketContext, SocketContext } from '@/context/SocketContext';

// Funcion que se conecta al servidor de web socket y retorna el socket, despues lo incializamos en el estado
function ServiceAlert() {

  const { online } = useContext(SocketContext) as ISocketContext;

  return (
    <div className={styles.alert}>
      <p>
        Service Status:
        {
          online
            ? <span className={styles.success}> Online</span>
            : <span className={styles.danger}> Offline</span>
        }
      </p>
    </div>
  );
}

export default ServiceAlert;