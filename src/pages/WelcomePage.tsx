import './Welcomepage.css'

import logo from '../assets/images/logo-home-library.svg'
import catalogIcon from '../assets/images/feature-catalog.svg'
import scanIcon from '../assets/images/feature-scan.svg'
import collectionIcon from '../assets/images/feature-collections.svg'
import ornament from '../assets/images/ornament.svg'
import arrowRight from '../assets/images/arrow-right.svg'

function WelcomePage() {
    return(
        <main className="welcome">
            <section className="welcome__content">
                <header className="welcome__header">
                    <img className="welcome__logo" src={logo} alt="Home Library"/>
                    <h1 className="welcome__title">Домашняя библиотека</h1>
                    <p className="welcome__subtitle">Личная библиотека в вашем доме</p>
                    <img className="welcome__ornament" src={ornament} alt=""/>
                </header>
                <div className="welcome__features">
                    <article className="welcome__feature">
                        <img src={catalogIcon} alt=""/>
                        <p>Удобный учет книг по шкафам, полкам и&nbsp;рядам</p>
                    </article>
                    <article className="welcome__feature">
                        <img src={scanIcon} alt=""/>
                        <p>Быстрое добавление книг (сканирование, ISBM, поиск)</p>
                    </article>
                    <article className="welcome__feature">
                        <img src={collectionIcon} alt=""/>
                        <p>Коллекции, статистика и полный контроль библиотеки</p>
                    </article>
                </div>
                <button className="welcome__start" type='button'>
                    <span>Начать работу</span>
                    <img src={arrowRight} alt=""/>
                </button>
                <p className="welcome__login">
                    У меня уже есть библиотека {' '}
                    <button type="button">Войти</button>
                </p>
            </section>
        </main>
    )
}

export default WelcomePage