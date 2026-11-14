import { useState } from "react"
import logo from "../assets/images/logo-home-library.svg"
import keyIcon from "../assets/images/recovery-icon-key.svg"
import copyIcon from "../assets/images/recovery-icon-copy.svg"
import saveIcon from "../assets/images/recovery-icon-save.svg"
import warningIcon from "../assets/images/recovery-icon-warning.svg"
import printIcon from "../assets/images/recovery-icon-print.svg"
import closeIcon from "../assets/images/recovery-icon-close.svg"
import emailIcon from "../assets/images/register-icon-email.svg"

import './RecoveryKeyPage.css'

type RecoveryKeyPageProps = {
    onClose: () => void
    onContinue?: () => void
    recoveryKey?: string
}

const DEMO_KEY = 'HLB7-K9F2-M8D4-Q6ZP'

export default function RecoveryKeyPage({ onClose, onContinue, recoveryKey }: RecoveryKeyPageProps) {
    const [keySaved, setKeySaved] = useState(true)
    const [notice, setNotice] = useState('')

    const isDemo = !recoveryKey
    const displayedKey = recoveryKey ?? DEMO_KEY

    function requireRealKey() {
        if (isDemo) {
            setNotice('Это демонстрационный ключ. Настоящий ключ будет создан после подключения системы пользователей.')
        }
        return false
    }

    async function handleCopy() {
        if (!requireRealKey()) return

        try {
            await navigator.clipboard.writeText(displayedKey)
            setNotice('Ключ скопирован в буфер обмена.')
        } catch {
            setNotice('Не удалось скопировать ключ.')
        }
    }

    function handleSave() {
        if (!requireRealKey()) return

        const blob = new Blob(
            [displayedKey + '\n'],
            { type: 'text/plain;charset=utf-8' }
        )

        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')

        link.href = url
        link.download = 'home-library-recovery-key.txt'
        document.body.appendChild(link)
        link.click()
        link.remove()

        URL.revokeObjectURL(url)

        setNotice(
            'Файл предложен для сохранения. Проверьте, что он действительно сохранён.'
        )
    }

    function handlePrint() {
        if (!requireRealKey()) return

        setNotice(
            'Печать ключа будет подключена через отдельное защищённое окно.'
        )
    }

    function handleEmail() {
        if (!requireRealKey()) return

        setNotice(
            'Отправку ключа по e-mail подключим вместе с системой пользователей.'
        )
    }

    function handleContinue() {
        if (!keySaved) {
            setNotice(
                'Подтвердите, что ключ восстановления сохранён.'
            )
            return
        }

        if (isDemo) {
            setNotice(
                'Сейчас открыт демонстрационный экран. Настоящий ключ пока не создан.'
            )
            return
        }

        if (onContinue) {
            onContinue()
        } else {
            setNotice(
                'Следующий экран — выбор режима базы данных. Подключим его к навигации.'
            )
        }
    }

    return (
    <main className="recovery-page">
      <section
        className="recovery-card"
        aria-labelledby="recovery-title"
      >
        {/* Верхняя часть */}
        <header className="recovery-header">
          <div className="recovery-brand">
            <img src={logo} alt="" />
            <span>Домашняя библиотека</span>
          </div>

          <button
            className="recovery-close"
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
          >
            <img src={closeIcon} alt="" />
          </button>
        </header>

        {/* Заголовок и пояснение */}
        <div className="recovery-intro">
          <div className="recovery-intro__icon">
            <img src={keyIcon} alt="" />
          </div>

          <div className="recovery-intro__text">
            <h1 id="recovery-title">
              Сохраните ключ восстановления
            </h1>

            <p>
              Этот ключ понадобится, если вы забудете пароль.
              <br />
              Сохраните его в надёжном месте.
            </p>
          </div>
        </div>

        {/* Ключ восстановления */}
        <div className="recovery-key">
          <span className="recovery-key__value">
            {displayedKey}
          </span>

          <button
            className="recovery-key__copy"
            type="button"
            onClick={handleCopy}
            aria-label="Скопировать ключ"
          >
            <img src={copyIcon} alt="" />
          </button>
        </div>

        {isDemo && (
          <p className="recovery-demo">
            Демонстрационный ключ — не используйте его
            для восстановления доступа.
          </p>
        )}

        {/* Способы сохранения */}
        <div className="recovery-actions">
          <button
            className="recovery-action"
            type="button"
            onClick={handleCopy}
          >
            <img src={copyIcon} alt="" />
            <span>Скопировать<br />ключ</span>
          </button>

          <button
            className="recovery-action"
            type="button"
            onClick={handleSave}
          >
            <img src={saveIcon} alt="" />
            <span>Сохранить<br />в файл</span>
          </button>

          <button
            className="recovery-action"
            type="button"
            onClick={handlePrint}
          >
            <img src={printIcon} alt="" />
            <span>Распечатать</span>
          </button>

          <button
            className="recovery-action"
            type="button"
            onClick={handleEmail}
          >
            <img src={emailIcon} alt="" />
            <span>Отправить<br />на e-mail</span>
          </button>
        </div>

        {/* Предупреждение */}
        <div className="recovery-warning" role="note">
          <img src={warningIcon} alt="" />

          <p>
            Не передавайте ключ другим людям. Любой,
            кто получит его, сможет сбросить ваш пароль.
          </p>
        </div>

        {/* Подтверждение */}
        <label className="recovery-confirm">
          <input
            type="checkbox"
            checked={keySaved}
            onChange={(event) => {
              setKeySaved(event.target.checked)
              setNotice('')
            }}
          />

          <span>
            Я сохранил ключ восстановления
          </span>
        </label>

        {/* Продолжить */}
        <button
          className="recovery-continue"
          type="button"
          disabled={!keySaved || isDemo}
          onClick={handleContinue}
        >
          Продолжить
        </button>

        {/* Уведомления */}
        {notice && (
          <p className="recovery-notice" role="status">
            {notice}
          </p>
        )}
      </section>
    </main>
  )
}