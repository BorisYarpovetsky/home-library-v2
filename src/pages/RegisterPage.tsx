
import { useState, type FormEvent } from 'react'

import logo from '../assets/images/logo-home-library.svg'
import userIcon from '../assets/images/login-icon-user.svg'
import emailIcon from '../assets/images/register-icon-email.svg'
import lockIcon from '../assets/images/login-icon-lock.svg'
import eyeIcon from '../assets/images/login-icon-eye.svg'
import eyeOffIcon from '../assets/images/login-icon-eye-off.svg'
import arrowBack from '../assets/images/arrow-back.svg'

import './RegisterPage.css'

type RegisterPageProps = {
  onBack: () => void
  onLogin: () => void
}

export default function RegisterPage({
  onBack,
  onLogin,
}: RegisterPageProps) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [acceptedTerms, setAcceptedTerms] = useState(true)
  const [notice, setNotice] = useState('')

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!username.trim() || !password || !confirmPassword) {
      setNotice('Заполните обязательные поля.')
      return
    }

    if (
      email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      setNotice('Введите корректный e-mail.')
      return
    }

    if (password !== confirmPassword) {
      setNotice('Пароли не совпадают.')
      return
    }

    if (!acceptedTerms) {
      setNotice('Необходимо принять условия соглашения.')
      return
    }

    setNotice(
      'Форма проверена. Сохранение пользователя подключим позже.'
    )
  }

  return (
    <main className="register-page">
      {/* Возврат на приветственный экран */}
      <button
        type="button"
        className="register-back"
        onClick={onBack}
      >
        <img
          className="register-back__icon"
          src={arrowBack}
          alt=""
          aria-hidden="true"
        />
        <span>Регистрация</span>
      </button>

      {/* Основная группа: карточка и кнопка Windows */}
      <div className="register-content">
        <section className="register-card">
          <header className="register-header">
            <img
              className="register-logo"
              src={logo}
              alt=""
            />

            <h1>Домашняя библиотека</h1>
            <h2>Регистрация</h2>

            <p>
              Создайте личную библиотеку и храните
              <br />
              свои книги в удобном формате
            </p>
          </header>

          <form
            className="register-form"
            onSubmit={handleRegister}
            noValidate
          >
            {/* Имя пользователя */}
            <label className="register-field">
              <img src={userIcon} alt="" />

              <input
                type="text"
                placeholder="Имя пользователя *"
                aria-label="Имя пользователя"
                autoComplete="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                  setNotice('')
                }}
              />
            </label>

            {/* Электронная почта */}
            <label className="register-field">
              <img src={emailIcon} alt="" />

              <input
                type="email"
                placeholder="E-mail (необязательно)"
                aria-label="E-mail"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  setNotice('')
                }}
              />
            </label>

            {/* Пароль */}
            <div className="register-field">
              <img src={lockIcon} alt="" />

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль *"
                aria-label="Пароль"
                autoComplete="new-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                  setNotice('')
                }}
              />

              <button
                type="button"
                className="register-eye"
                aria-label={
                  showPassword
                    ? 'Скрыть пароль'
                    : 'Показать пароль'
                }
                aria-pressed={showPassword}
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                <img
                  src={showPassword ? eyeOffIcon : eyeIcon}
                  alt=""
                />
              </button>
            </div>

            {/* Подтверждение пароля */}
            <div className="register-field">
              <img src={lockIcon} alt="" />

              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Подтвердите пароль *"
                aria-label="Подтвердите пароль"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value)
                  setNotice('')
                }}
              />

              <button
                type="button"
                className="register-eye"
                aria-label={
                  showConfirmPassword
                    ? 'Скрыть пароль'
                    : 'Показать пароль'
                }
                aria-pressed={showConfirmPassword}
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                <img
                  src={
                    showConfirmPassword
                      ? eyeOffIcon
                      : eyeIcon
                  }
                  alt=""
                />
              </button>
            </div>

            {/* Согласие с условиями */}
            <label className="register-terms">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => {
                  setAcceptedTerms(event.target.checked)
                  setNotice('')
                }}
              />

              <span className="register-terms__text">
                Я принимаю условия{' '}
                <u>Пользовательского соглашения</u>

                <span className="register-terms__second-line">
                  и <u>Политики конфиденциальности</u>
                </span>
              </span>
            </label>

            {/* Отправка формы */}
            <button
              className="register-submit"
              type="submit"
            >
              Зарегистрироваться
            </button>
          </form>

          {/* Нижняя часть карточки */}
          <footer className="register-footer">
            <p>
              Уже есть аккаунт?
              <button
                type="button"
                onClick={onLogin}
              >
                Войти
              </button>
            </p>
          </footer>
        </section>

        {/* Кнопка Windows под карточкой */}
        <button
          type="button"
          className="register-windows"
          onClick={() =>
            setNotice(
              'Регистрацию через Windows подключим позже.'
            )
          }
        >
          Продолжить с Windows
        </button>
      </div>

      {/* Сообщение вне карточки: не меняет высоту формы */}
      {notice && (
        <p
          className="register-notice"
          role="status"
        >
          {notice}
        </p>
      )}
    </main>
  )
}
