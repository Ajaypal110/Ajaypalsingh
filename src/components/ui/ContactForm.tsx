'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { siteConfig } from '@/lib/data/site'

interface FormState {
  name: string
  email: string
  message: string
  honeypot: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const errs: FormErrors = {}

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      errs.message = 'Please include a message.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Bot honeypot check
    if (formData.honeypot) {
      return
    }

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <div className="rounded-2xl border border-[#1f1f1f] bg-[#0c0c0c] p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-[#c8a97e]/10 border border-[#c8a97e]/30 text-[#c8a97e] flex items-center justify-center mx-auto text-xl font-mono">
              ✓
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-[#f0f0f0]">
              Message Received
            </h3>
            <p className="text-sm text-[#888888] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, {formData.name}. I read every note and will get back to you soon.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false)
                  setFormData({ name: '', email: '', message: '', honeypot: '' })
                }}
                className="text-xs font-mono text-[#c8a97e] hover:underline"
              >
                Send another message →
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            {/* Honeypot anti-spam */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="b_website_hp"
                tabIndex={-1}
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                autoComplete="off"
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#888888]">
                Name <span className="text-[#c8a97e]">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  if (errors.name) setErrors({ ...errors, name: undefined })
                }}
                placeholder="What should I call you?"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-sm text-[#f0f0f0] placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#c8a97e] transition-colors ${
                  errors.name ? 'border-red-500/50' : 'border-[#1f1f1f] focus:border-[#c8a97e]'
                }`}
              />
              {errors.name && <p className="text-xs text-red-400 font-mono">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#888888]">
                Email <span className="text-[#c8a97e]">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  if (errors.email) setErrors({ ...errors, email: undefined })
                }}
                placeholder="you@domain.com"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-sm text-[#f0f0f0] placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#c8a97e] transition-colors ${
                  errors.email ? 'border-red-500/50' : 'border-[#1f1f1f] focus:border-[#c8a97e]'
                }`}
              />
              {errors.email && <p className="text-xs text-red-400 font-mono">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#888888]">
                Message <span className="text-[#c8a97e]">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value })
                  if (errors.message) setErrors({ ...errors, message: undefined })
                }}
                placeholder="What would you like to discuss or build together?"
                className={`w-full px-4 py-3 rounded-lg bg-[#141414] border text-sm text-[#f0f0f0] placeholder-[#555555] focus:outline-none focus:ring-1 focus:ring-[#c8a97e] transition-colors resize-none ${
                  errors.message ? 'border-red-500/50' : 'border-[#1f1f1f] focus:border-[#c8a97e]'
                }`}
              />
              {errors.message && <p className="text-xs text-red-400 font-mono">{errors.message}</p>}
            </div>

            {/* Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#f0f0f0] text-[#060606] font-medium text-sm hover:bg-[#c8a97e] transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>

              <p className="text-xs text-[#555555] font-mono">
                Direct mailto fallback below
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
