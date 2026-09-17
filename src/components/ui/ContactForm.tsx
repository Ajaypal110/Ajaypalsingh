'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

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
    <div className="rounded-[28px] border border-[#DADCE8] bg-white p-6 sm:p-10 shadow-sm">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center space-y-4"
          >
            <div className="w-14 h-14 rounded-full bg-[#ECEEF8] text-[#1F2AD6] flex items-center justify-center mx-auto text-2xl font-medium">
              ✓
            </div>
            <h3 className="text-3xl font-medium text-[#0F1330] tracking-[-0.03em]">
              Message Received
            </h3>
            <p className="text-base text-[#5A5F7A] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, {formData.name}. I read every note and will get back to you soon.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false)
                  setFormData({ name: '', email: '', message: '', honeypot: '' })
                }}
                className="text-[15px] font-medium text-[#1F2AD6] hover:underline"
              >
                Send another message →
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Honeypot hidden input */}
            <input
              type="text"
              name="website"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label
                htmlFor="contact-name"
                className="block text-[14px] font-medium text-[#0F1330] mb-2"
              >
                Your Name <span className="text-[#1F2AD6]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  if (errors.name) setErrors({ ...errors, name: undefined })
                }}
                placeholder="Ajaypal Singh"
                className={`w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border text-[16px] text-[#0F1330] placeholder:text-[#8A8FB0] focus:outline-none focus:border-[#1F2AD6] transition-colors ${
                  errors.name ? 'border-red-500' : 'border-[#DADCE8]'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-[14px] font-medium text-[#0F1330] mb-2"
              >
                Your Email <span className="text-[#1F2AD6]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  if (errors.email) setErrors({ ...errors, email: undefined })
                }}
                placeholder="you@domain.com"
                className={`w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border text-[16px] text-[#0F1330] placeholder:text-[#8A8FB0] focus:outline-none focus:border-[#1F2AD6] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#DADCE8]'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-[14px] font-medium text-[#0F1330] mb-2"
              >
                Message <span className="text-[#1F2AD6]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value })
                  if (errors.message) setErrors({ ...errors, message: undefined })
                }}
                placeholder="Tell me about what you are building or what you'd like to discuss..."
                className={`w-full px-4 py-3 rounded-xl bg-[#F7F7F5] border text-[16px] text-[#0F1330] placeholder:text-[#8A8FB0] focus:outline-none focus:border-[#1F2AD6] transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-[#DADCE8]'
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-600 mt-1.5 font-medium">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-full bg-[#1F2AD6] text-[#F7F7F5] text-[15px] font-medium hover:bg-[#0F1330] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <span>→</span>
                </>
              )}
            </button>
          </form>
        )}
      </AnimatePresence>
    </div>
  )
}
