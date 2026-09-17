'use client'

import { useState } from 'react'

const TOPICS = ['An idea', 'Ojaven', 'Collaboration', 'Product or AI', 'Just saying hi']

interface FormState {
  topic: string
  name: string
  email: string
  message: string
  errors: Record<string, string>
  sending: boolean
  sent: boolean
}

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    topic: 'An idea',
    name: '',
    email: '',
    message: '',
    errors: {},
    sending: false,
    sent: false,
  })

  const setField = (field: string, value: string) =>
    setState((s) => ({ ...s, [field]: value, errors: { ...s.errors, [field]: '' } }))

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!state.name.trim()) errs.name = 'Please add your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim()))
      errs.email = 'Please add a valid email.'
    if (state.message.trim().length < 10) errs.message = 'A few more words, please.'
    return errs
  }

  const submit = () => {
    if (state.sending) return
    const errors = validate()
    if (Object.keys(errors).length) {
      setState((s) => ({ ...s, errors }))
      return
    }
    setState((s) => ({ ...s, sending: true, errors: {} }))
    setTimeout(() => setState((s) => ({ ...s, sending: false, sent: true })), 1100)
  }

  const reset = () =>
    setState({ topic: 'An idea', name: '', email: '', message: '', errors: {}, sending: false, sent: false })

  const firstName = state.name.trim().split(' ')[0] || 'friend'

  if (state.sent) {
    return (
      <div
        role="status"
        className="rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 flex flex-col justify-between min-h-[480px] sm:min-h-[560px] relative overflow-hidden"
        style={{ background: '#1F2AD6', color: '#F7F7F5' }}
      >
        {/* decorative rings */}
        <svg
          aria-hidden="true"
          width="600" height="600" viewBox="0 0 600 600" fill="none"
          className="absolute -right-[200px] -bottom-[220px] opacity-35 pointer-events-none"
        >
          <circle cx="300" cy="300" r="299" stroke="#AEB5FF" />
          <circle cx="300" cy="300" r="200" stroke="#AEB5FF" />
          <circle cx="300" cy="300" r="100" stroke="#AEB5FF" />
        </svg>

        <div className="w-[88px] h-[88px] rounded-full bg-[#F7F7F5] flex items-center justify-center relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path
              d="M10 21l7 7 13-15"
              stroke="#1F2AD6"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 60,
                strokeDashoffset: 0,
                animation: 'ct-check .8s cubic-bezier(.65,0,.35,1) .35s both',
              }}
            />
          </svg>
        </div>

        <div className="relative">
          <h2
            className="m-0 font-medium leading-[.95] tracking-[-0.06em]"
            style={{ fontSize: 'clamp(40px, 8vw, 88px)' }}
          >
            Thanks, {firstName}.
          </h2>
          <p className="mt-5 max-w-[460px] text-[22px] leading-[1.45]" style={{ color: '#D6DAFF' }}>
            Your message is on its way. I&apos;ll reply to {state.email}.
          </p>
          <button
            onClick={reset}
            className="mt-8 h-[52px] px-6 rounded-full border border-[#AEB5FF] bg-transparent text-[#F7F7F5] text-[15px] cursor-pointer transition-colors hover:bg-[rgba(255,255,255,.1)]"
          >
            Send another message
          </button>
        </div>

        <style>{`
          @keyframes ct-check { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
        `}</style>
      </div>
    )
  }

  return (
    <div
      className="rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 box-border"
      style={{ border: '1px solid #DADCE8', background: '#FFFFFF' }}
    >
      <div className="flex justify-between items-baseline gap-4">
        <h2
          className="m-0 font-medium tracking-[-0.045em]"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
        >
          Send a message
        </h2>
        <span className="text-[14px] shrink-0" style={{ color: '#5A5F7A' }}>
          All fields needed
        </span>
      </div>

      {/* Topic chips */}
      <div className="mt-10">
        <p id="topic-label" className="m-0 text-[14px]" style={{ color: '#5A5F7A' }}>
          What&apos;s it about?
        </p>
        <div
          role="group"
          aria-labelledby="topic-label"
          className="mt-3.5 flex flex-wrap gap-2.5"
        >
          {TOPICS.map((t) => {
            const active = t === state.topic
            return (
              <button
                key={t}
                onClick={() => setState((s) => ({ ...s, topic: t }))}
                aria-pressed={active}
                className="h-[46px] px-5 rounded-full text-[15px] cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: `1px solid ${active ? '#0F1330' : '#DADCE8'}`,
                  background: active ? '#0F1330' : 'transparent',
                  color: active ? '#F7F7F5' : '#0F1330',
                }}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>

      {/* Name + Email row */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Name */}
        <div className="relative">
          <label htmlFor="c-name" className="text-[14px]" style={{ color: '#5A5F7A' }}>
            Your name
          </label>
          <input
            id="c-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            value={state.name}
            onChange={(e) => setField('name', e.target.value)}
            aria-invalid={!!state.errors.name}
            className="ct-field-input"
          />
          <span
            className="ct-bar"
            style={{ background: state.errors.name ? '#C4314B' : '#1F2AD6' }}
          />
        </div>
        {/* Email */}
        <div className="relative">
          <label htmlFor="c-email" className="text-[14px]" style={{ color: '#5A5F7A' }}>
            Email
          </label>
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={state.email}
            onChange={(e) => setField('email', e.target.value)}
            aria-invalid={!!state.errors.email}
            className="ct-field-input"
          />
          <span
            className="ct-bar"
            style={{ background: state.errors.email ? '#C4314B' : '#1F2AD6' }}
          />
        </div>
      </div>
      {/* Inline errors */}
      <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-8 min-h-[20px] text-[13px]" style={{ color: '#C4314B' }}>
        <span role="alert">{state.errors.name}</span>
        <span role="alert">{state.errors.email}</span>
      </div>

      {/* Message */}
      <div className="relative mt-6">
        <label htmlFor="c-msg" className="text-[14px]" style={{ color: '#5A5F7A' }}>
          Message
        </label>
        <textarea
          id="c-msg"
          rows={4}
          placeholder="Tell me what you're building or thinking about..."
          value={state.message}
          onChange={(e) => setField('message', e.target.value.slice(0, 1000))}
          aria-invalid={!!state.errors.message}
          className="ct-field-input resize-none"
        />
        <span
          className="ct-bar"
          style={{ background: state.errors.message ? '#C4314B' : '#1F2AD6' }}
        />
      </div>
      <div className="mt-2.5 flex justify-between text-[13px]">
        <span role="alert" style={{ color: '#C4314B' }}>{state.errors.message}</span>
        <span style={{ color: '#8A8FB0', fontVariantNumeric: 'tabular-nums' }}>
          {state.message.length} / 1000
        </span>
      </div>

      {/* Submit row */}
      <div className="mt-9 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
        <p className="m-0 max-w-[300px] text-[14px] leading-[1.45]" style={{ color: '#5A5F7A' }}>
          Your details are only used to reply to you.
        </p>
        <button
          onClick={submit}
          disabled={state.sending}
          className="group/send h-16 pl-[30px] pr-2.5 rounded-full border-0 text-[#F7F7F5] flex items-center gap-4 text-[17px] font-semibold cursor-pointer transition-colors duration-300 disabled:opacity-70"
          style={{ background: '#1F2AD6' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#0F1330')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#1F2AD6')}
        >
          <span className="inline-flex flex-col overflow-hidden h-[1.25em] leading-[1.25em]">
            <span className="transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover/send:-translate-y-full">
              {state.sending ? 'Sending…' : 'Send message'}
            </span>
            <span className="transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover/send:-translate-y-full">
              {state.sending ? 'Sending…' : 'Send message'}
            </span>
          </span>
          <span
            className="w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0"
            style={{ background: '#F7F7F5' }}
          >
            {state.sending ? (
              <svg
                className="animate-spin"
                width="18" height="18" viewBox="0 0 18 18"
                fill="none" stroke="#1F2AD6" strokeWidth="2" strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M9 2a7 7 0 1 1-7 7" />
              </svg>
            ) : (
              <svg
                className="transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover/send:rotate-45"
                width="16" height="16" viewBox="0 0 14 14"
                fill="none" stroke="#1F2AD6" strokeWidth="1.8" strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M3 11L11 3M5 3h6v6" />
              </svg>
            )}
          </span>
        </button>
      </div>

      <style>{`
        .ct-field-input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          border: 0;
          border-bottom: 1px solid #DADCE8;
          background: transparent;
          padding: 10px 0 16px;
          font-size: clamp(16px, 3.5vw, 22px);
          letter-spacing: -0.02em;
          color: #0F1330;
          outline: none;
          font-family: inherit;
        }
        .ct-field-input::placeholder { color: #B8BCD6; }
        .ct-bar {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .6s cubic-bezier(.16,1,.3,1);
        }
        .ct-field-input:focus ~ .ct-bar { transform: scaleX(1); }
      `}</style>
    </div>
  )
}
