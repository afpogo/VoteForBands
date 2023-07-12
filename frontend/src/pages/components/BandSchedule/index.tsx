import { ISocketContext, SocketContext } from "@/context/SocketContext";
import { FormEvent, useContext, useState } from "react";
import styles from './styles.module.scss';

function BandSchedule() {
    const [data, setData] = useState('');
    const { socket } = useContext(SocketContext) as ISocketContext;
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        socket?.emit('add-band', {name: data});
    }
    return (
        <div className={styles.formBands}>
            <form onSubmit={onSubmit} >
                <label>
                    Add Banda
                    <input
                        type="text"
                        placeholder='Agregar Banda'
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}

export default BandSchedule;