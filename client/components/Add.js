import styles from "../styles/Add.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);
    const [prices, setPrices] = useState([]);


    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };

    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
    };

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };




    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.close} onClick={() => setClose(true)}>X</span>
                <h1>Add a new Pizza</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an Image</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input className={styles.input} type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Desc</label>
                    <textarea rows={4} type="text" onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <input
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="Small"
                        onChange={(e) => changePrice(e, 0)}
                    />
                    <input
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="Medium"
                        onChange={(e) => changePrice(e, 1)}
                    />
                    <input
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="Large"
                        onChange={(e) => changePrice(e, 2)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Extra</label>
                    <div className={styles.extra}>
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="text"
                            placeholder="Item"
                            name="text"
                            onChange={handleExtraInput}
                        />
                        <input
                            className={`${styles.input} ${styles.inputSm}`}
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={handleExtraInput}
                        />
                        <button className={styles.extraButton} onClick={handleExtra}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
