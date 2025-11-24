'use client';

import { useState, FormEvent } from 'react';
import { useTranslation } from '@/app/i18n/client';

interface ContactFormProps {
  lng: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm({ lng }: ContactFormProps) {
  const { t } = useTranslation(lng);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contactPage.validation.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contactPage.validation.emailRequired');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('contactPage.validation.emailInvalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contactPage.validation.subjectRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contactPage.validation.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contactPage.validation.messageMin');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simple mailto fallback
    const mailtoLink = `mailto:contact@re-mind.app?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    try {
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
          {t('contactPage.form.name')}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={t('contactPage.form.namePlaceholder')}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-action/50 transition-all`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
          {t('contactPage.form.email')}
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={t('contactPage.form.emailPlaceholder')}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-action/50 transition-all`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
          {t('contactPage.form.subject')}
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder={t('contactPage.form.subjectPlaceholder')}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.subject ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-action/50 transition-all`}
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
          {t('contactPage.form.message')}
        </label>
        <textarea
          id="message"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t('contactPage.form.messagePlaceholder')}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-action/50 transition-all resize-none`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-action text-primary rounded-lg font-semibold
          hover:bg-action/90 hover:shadow-lg transition-all duration-300
          active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t('contactPage.form.sending') : t('contactPage.form.send')}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
          {t('contactPage.form.success')}
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
          {t('contactPage.form.error')}
        </div>
      )}
    </form>
  );
}
