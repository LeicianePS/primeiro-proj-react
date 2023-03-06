import loading from '../../img/loading.svg'
import styles from './Loading.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function Loading({id, name, budget, category, dandleRemove}) {
    return (
        <div className={styles.loader_container}>
            <img src={loading} alt="Loading" className={styles.loader}/>
        </div>
    )
}

export default Loading