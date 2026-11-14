
import { useState, type FormEvent } from 'react'
import logo from '../assets/images/logo-home-library.svg'
import logoBook from '../assets/images/logo-login-books.svg'
import userIcon from '../assets/images/login-icon-user.svg'
import './LoginPage.css'

type LoginPageProps = {
    onBack: () => void
}

export default function LoginPage({ onBack }: LoginPageProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(true)
    const [notice, setNotice] = useState('')

    function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!username.trim() || !password) {
            setNotice('Введите имя пользователя и пароль.')
            return
        }

        setNotice('Проверку учётных данных подключим позже.')
    }

    return (
        <main className="login-page">
            <button
                className="login-page__back"
                type="button"
                onClick={onBack}
            >
                <img src={logo} alt="" />
                <span>Домашняя библиотека</span>
            </button>

            <section className="login-card">
                <header className="login-card__header">
                    <img
                        className="login-card__logo"
                        src={logoBook}
                        alt=""
                    />

                    <div className="login-card__heading">
                        <h1>Вход в Домашнюю Библиотеку</h1>
                        <p>
                            Войдите, чтобы открыть свою домашнюю библиотеку.
                        </p>
                    </div>
                </header>

                <form onSubmit={handleLogin}>
                    <div className="login-field">
                        <span className="login-field__icon" aria-hidden="true">
                            <img src={userIcon} alt="" />
                        </span>
                        <input
                            type="text"
                            placeholder="Имя пользователя"
                            aria-label="Имя пользователя"
                            autoComplete="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>

                    <div className="login-field">
                        <span className="login-field__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <rect
                                    x="5" y="10" width="14" height="11"
                                    rx="2" stroke="currentColor" strokeWidth="1.7"
                                />
                                <path
                                    d="M8 10V7a4 4 0 0 1 8 0v3"
                                    stroke="currentColor" strokeWidth="1.7"
                                />
                            </svg>
                        </span>

                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Пароль"
                            aria-label="Пароль"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <button
                            className="login-field__eye"
                            type="button"
                            aria-label={
                                showPassword ? 'Скрыть пароль' : 'Показать пароль'
                            }
                            aria-pressed={showPassword}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <svg viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"
                                    stroke="currentColor" strokeWidth="1.7"
                                />
                                <circle
                                    cx="12" cy="12" r="3"
                                    stroke="currentColor" strokeWidth="1.7"
                                />
                                {showPassword && (
                                    <path
                                        d="M3 21 21 3"
                                        stroke="currentColor" strokeWidth="1.7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="login-options">
                        <label className="login-remember">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(event) =>
                                    setRememberMe(event.target.checked)
                                }
                            />
                            <span>Запомнить меня</span>
                        </label>

                        <button
                            type="button"
                            className="login-link"
                            onClick={() =>
                                setNotice('Экран восстановления пароля добавим следующим этапом.')
                            }
                        >
                            Забыли пароль?
                        </button>
                    </div>

                    <button className="login-primary" type="submit">
                        Войти
                    </button>

                    <button
                        className="login-secondary"
                        type="button"
                        onClick={() =>
                            setNotice('Экран регистрации подключим следующим этапом.')
                        }
                    >
                        Создать аккаунт
                    </button>

                    {notice && (
                        <p className="login-notice" role="status">
                            {notice}
                        </p>
                    )}
                </form>
            </section>

            <footer className="login-footer">
                <div className="login-footer__ornament" aria-hidden="true">

                    <div className="login-footer__ornament" aria-hidden="true">
                        <span className="login-footer__line" />

                        <svg
                            className="login-footer__book"
                            viewBox="0 0 36 32"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M18 28C13.5 24.5 8 24 3 25V5C9 3 14 4.5 18 8V28Z"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 28C22.5 24.5 28 24 33 25V5C27 3 22 4.5 18 8V28Z"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="login-footer__line" />
                    </div>

                </div>

                <p>
                    Если у вас ещё нет учётной записи, зарегистрируйтесь
                    и сохраните ключ восстановления.
                </p>

                <button
                    className="login-windows"
                    type="button"
                    onClick={() =>
                        setNotice('Вход через Windows подключим на этапе авторизации.')
                    }
                >
                    Войти через Windows
                </button>
            </footer>
        </main>
    )
}