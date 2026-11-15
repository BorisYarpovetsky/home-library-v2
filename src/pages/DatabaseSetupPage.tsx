import { useState } from "react";

import logo from '../assets/images/logo-home-library.svg'
import localIcon from '../assets/images/database-icon-local.svg'
import serverIcon from '../assets/images/database-icon-server.svg'
import connectIcon from '../assets/images/database-icon-connect.svg'

import './DatabaseSetupPage.css'

type DatabaseSetupPageProps = {
    onLocal?: () => void
    onServer?: () => void
    onConnect?: () => void
    onContinueLater?: () => void
    onSettings?: () => void
}

type ModalType = 'help' | 'later' | null

export default function DatabaseSetupPage({ onLocal, onServer, onConnect, onContinueLater, onSettings }: DatabaseSetupPageProps) {
    const [modal, setModal] = useState<ModalType>(null)
    const [notice, setNotice] = useState('')

    function selectLocal() {
        setNotice('')

        if (onLocal) {
            onLocal()
        } else {
            setNotice('Выбрана локальная база. Следующий экран — создание локальной библиотеки.')
        }
    }

    function selectServer() {
        setNotice('')

        if (onServer) {
            onServer()
        } else {
            setNotice('Выбрана основная база. Следующий экран — настройка общей библиотеки.')
        }
    }

    function selectConnect() {
        setNotice('')

        if (onConnect) {
            onConnect()
        } else {
            setNotice('Выбрано подключение. Следующий экран — параметры существующей базы.')
        }
    }

    function continueLater() {
        setModal(null)

        if (onContinueLater) {
            onContinueLater()
        } else {
            setNotice('Настройка отложена в предварительном просмотре. Главный экран без настроенной базы подключим позднее.')
        }
    }

    function openSettings() {
        if (onSettings) {
            onSettings()
        } else {
            setNotice('Раздел настроек подключим на следующем этапе.')
        }
    }

    return (
        <main className="database-setup">
            {/* Верхняя панель */}
            <header className="database-setup__topbar">
                <div className="database-setup__brand">
                    <img src={logo} alt="" />
                    <span>Домашняя библиотека</span>
                </div>

                <button
                    type="button"
                    className="database-setup__settings"
                    onClick={openSettings}
                >
                    <span aria-hidden="true">⚙</span>
                    Настройки
                </button>
            </header>

            <div className="database-setup__main">
                {/* Индикатор этапа */}
                <div className="database-setup__step">
                    <span>Шаг 1 из 7</span>
                </div>

                {/* Заголовок */}
                <div className="database-setup__heading">
                    <img src={logo} alt="" />

                    <div>
                        <h1>Первичная настройка</h1>
                        <p>
                            Выберите, как будет работать библиотека.
                        </p>
                    </div>
                </div>

                {/* Три варианта работы */}
                <section
                    className="database-setup__options"
                    aria-label="Выбор режима работы библиотеки"
                >
                    {/* Локальная база */}
                    <article className="database-option">
                        <img
                            className="database-option__icon"
                            src={localIcon}
                            alt=""
                        />

                        <h2>Локальная база</h2>

                        <p>
                            Все данные хранятся на этом
                            компьютере. Подходит для
                            одной рабочей станции.
                        </p>

                        <button
                            className="database-option__button"
                            type="button"
                            onClick={selectLocal}
                        >
                            Выбрать
                        </button>
                    </article>

                    {/* Основная база */}
                    <article className="database-option">
                        <img
                            className="database-option__icon"
                            src={serverIcon}
                            alt=""
                        />

                        <h2>
                            Основная база для
                            нескольких компьютеров
                        </h2>

                        <p>
                            Этот компьютер станет
                            основным. Другие устройства
                            смогут подключаться
                            к библиотеке.
                        </p>

                        <button
                            className="database-option__button"
                            type="button"
                            onClick={selectServer}
                        >
                            Создать основную базу
                        </button>
                    </article>

                    {/* Подключение */}
                    <article className="database-option">
                        <img
                            className="database-option__icon"
                            src={connectIcon}
                            alt=""
                        />

                        <h2>
                            Подключиться к
                            существующей базе
                        </h2>

                        <p>
                            Подключение к уже
                            настроенной библиотеке
                            на другом компьютере.
                        </p>

                        <button
                            className="database-option__button"
                            type="button"
                            onClick={selectConnect}
                        >
                            Подключиться
                        </button>
                    </article>
                </section>

                {/* Декоративный разделитель */}
                <div
                    className="database-setup__divider"
                    aria-hidden="true"
                >
                    <span />
                    <img src={logo} alt="" />
                    <span />
                </div>

                <p className="database-setup__hint">
                    Режим работы можно изменить позже
                    в настройках приложения.
                </p>

                {/* Нижние кнопки */}
                <div className="database-setup__bottom">
                    <button
                        type="button"
                        className="database-setup__secondary"
                        onClick={() => setModal('later')}
                    >
                        <span aria-hidden="true">◷</span>
                        Продолжить позже
                    </button>

                    <button
                        type="button"
                        className="database-setup__secondary"
                        onClick={() => setModal('help')}
                    >
                        <span aria-hidden="true">ⓘ</span>
                        Помощь
                    </button>
                </div>

                {notice && (
                    <p className="database-setup__notice" role="status">
                        {notice}
                    </p>
                )}
            </div>

            {/* Всплывающие окна */}
            {modal && (
                <div
                    className="database-modal__overlay"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setModal(null)
                        }
                    }}
                >
                    <section
                        className="database-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="database-modal-title"
                    >
                        <div className="database-modal__header">
                            <h2 id="database-modal-title">
                                {modal === 'help'
                                    ? 'Помощь'
                                    : 'Продолжить позже?'}
                            </h2>

                            <button
                                type="button"
                                className="database-modal__close"
                                aria-label="Закрыть окно"
                                onClick={() => setModal(null)}
                            >
                                ×
                            </button>
                        </div>

                        {modal === 'help' ? (
                            <div className="database-modal__body">
                                <p>
                                    Выберите способ хранения вашей
                                    домашней библиотеки.
                                </p>

                                <div className="database-modal__item">
                                    <img src={localIcon} alt="" />
                                    <div>
                                        <h3>Локальная база</h3>
                                        <p>
                                            Библиотека хранится на одном
                                            компьютере и работает без
                                            подключения к серверу.
                                        </p>
                                    </div>
                                </div>

                                <div className="database-modal__item">
                                    <img src={serverIcon} alt="" />
                                    <div>
                                        <h3>Основная база</h3>
                                        <p>
                                            Создайте общую библиотеку,
                                            доступную другим компьютерам
                                            в домашней сети.
                                        </p>
                                    </div>
                                </div>

                                <div className="database-modal__item">
                                    <img src={connectIcon} alt="" />
                                    <div>
                                        <h3>Подключение к базе</h3>
                                        <p>
                                            Используйте библиотеку,
                                            ранее настроенную
                                            на другом компьютере.
                                        </p>
                                    </div>
                                </div>

                                <div className="database-modal__footer">
                                    <button
                                        className="database-modal__primary"
                                        type="button"
                                        onClick={() => setModal(null)}
                                    >
                                        Понятно
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="database-modal__body">
                                <p>
                                    Вы можете отложить первоначальную
                                    настройку и познакомиться
                                    с интерфейсом Home Library.
                                </p>

                                <div className="database-modal__information">
                                    Пока база данных не настроена,
                                    добавление и редактирование книг
                                    будут недоступны.
                                </div>

                                <p>
                                    Позже мастер можно открыть через
                                    «Настройки → База данных».
                                </p>

                                <div className="database-modal__footer">
                                    <button
                                        className="database-modal__cancel"
                                        type="button"
                                        onClick={() => setModal(null)}
                                    >
                                        Вернуться к настройке
                                    </button>

                                    <button
                                        className="database-modal__primary"
                                        type="button"
                                        onClick={continueLater}
                                    >
                                        Продолжить позже
                                    </button>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            )}
        </main>
    )
}