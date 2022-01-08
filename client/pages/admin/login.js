import styles from "../../styles/Login.module.css"
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();



    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Admin Dashboard</h1>
            </div>
        </div>
    )
}

export default Login
