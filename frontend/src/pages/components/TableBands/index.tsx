import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ISocketContext, SocketContext } from "@/context/SocketContext";
import styles from './styles.module.scss';
import clsx from 'clsx';

// interface IBandlist {
//     data: { id: string, name: string, votes: number }[];
//     // votar: (id: string) => void;
//     // delBand: (id: string) => void;
//     rename: (id: string, name: string) => void;
// }
// ({ data, rename }: IBandlist)

function TableBands() {
    const [bands, setBands] = useState<{ id: string, name: string, votes: number }[]>();
    const { socket } = useContext(SocketContext) as ISocketContext;
    useEffect(() => {
        socket?.on('band-list', (bands) => {
            setBands(bands);
        })
        return () => { socket?.off('band-list') }
    }, [socket]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, id: any) => {
        const onChange = event.target.value;
        setBands(bands => bands?.map(band => {
            if (band.id === id) {
                band.name = onChange;
            }
            return band;
        }));
    }

    const onFocusOut = (id: string, name: string) => {
        // Disparamos el evento de socket
        socket?.emit('rename-band', { id, name });
    }


    const createRows = () => {
        return (
            <>
                {
                    bands?.map(band => {
                        return <tr key={band.id}>
                            <td>
                                <button
                                    type='button'
                                    onClick={() => socket?.emit('vote-band', { id: band.id })}
                                > +1 </button>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className={styles.bandName}
                                    value={band.name}
                                    onChange={(event) => handleChange(event, band.id)}
                                    onBlur={() => onFocusOut(band.id, band.name)}
                                />
                            </td>
                            <td>
                                <h3>{band.votes}</h3>
                            </td>
                            <td>
                                <button
                                    type='button'
                                    onClick={() => socket?.emit('dalete-band', { id: band.id })}
                                > Borrar </button>
                            </td>
                        </tr>
                    })
                }
            </>
        )
    }
    return (
        <div className={styles.tbleBand}>
            <table summary="Listado de bandas tradicionales">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Votos</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {createRows()}
                </tbody>
            </table>
        </div>
    );
}

export default TableBands;