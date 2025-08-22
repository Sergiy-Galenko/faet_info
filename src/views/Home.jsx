import styles from "../styles/views/Home.module.css"
import ButtonColorFilled from '../components/ButtonColorFilled.jsx';
import ButtonColorBorder from '../components/ButtonColorBorder.jsx';
import Plane from '../components/Plane.jsx';
import VerticalLine from '../components/VerticalLine.jsx';

function Home() {
    return (
        <>
            <div className={styles.home_background}>
            <Plane />
            </div>
            <div className={styles.home_content}>
                <h1 className={styles.home_content__title}>
                Твій студентський портал  
                </h1>
                <div className={styles.home_content__paragraph}>
                    <p>
                        Тепер ти частина спільноти <b>Факультету аеронавігації, електроніки та телекомунікацій (ФАЕТ)</b>! На тебе чекає багато цікавого — нові знання, інженерні проєкти, студентські івенти та знайомства з людьми, які живуть авіацією й технологіями.
                    </p>
                    <p>
                        Тут ти зможеш розвиватися в аеронавігації, радіоелектроніці, телекомунікаціях і кібербезпеці, працювати з реальним обладнанням, брати участь у дослідженнях БПЛА, супутникового зв’язку, навігаційних та радіолокаційних систем.
                    </p>
                    <p>
                        Ми зробимо все, щоб твій старт у ФАЕТ був максимально комфортним: куратори, менторські програми, лабораторії та командні ініціативи допоможуть швидко зануритися в навчання й практику.
                    </p>
                    <p>
                        Якщо виникнуть питання або знадобиться підтримка — звертайся будь-коли. <b>Ласкаво просимо до ФАЕТ!</b>
                    </p>
                </div>
                <div className={styles.home_content__buttons}>
                <ButtonColorFilled color="#009ADE" text="Доєднатися" />
                <VerticalLine />
                <ButtonColorBorder color="#009ADE" text="Пройти опитування" />
                </div>
            </div>
        </>
    )
}

export default Home