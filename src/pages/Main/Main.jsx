import styles from './Main.module.scss'
import classNames from 'classnames';
const Main = () => {

    const handleLinkClick = (event) => {
        event.preventDefault();
        window.open('/docs/ozon.pdf', '_blank', 'noopener,noreferrer');
      };

    return <div className={styles.main}>
        <div className={classNames(styles.colorText, styles.font, styles.unselectableText)}>
            <div>Никита Захарычев,</div>
            <div>с Новым годом!</div>
        </div>
        <div>            
            <button onClick={handleLinkClick} className={styles.pressMeButton}>                
                <img className={styles.img} src={"/assets/gift.gif"}/>
                </button>
        </div>
        <div className={classNames(styles.pressText, styles.colorText,  styles.unselectableText)}>Нажми на подарок!</div>
    </div>
}

export default Main;