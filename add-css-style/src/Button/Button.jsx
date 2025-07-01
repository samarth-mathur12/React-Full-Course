import styles from './Button.module.css'

function Button(){

    const style = {

            backgroundColor: "hsl(124, 65.70%, 58.80%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border:"none",
            cursor: "pointer",
    }

    return(
        <>
            <button className={styles.button}>Click Me</button>
            <button style ={style}>Click Me too</button>
        </>
        
    );

};

export default Button;