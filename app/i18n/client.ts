'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'

import { getOptions, languages, cookieName } from './settings'
import en from './locales/en.json'
import fr from './locales/fr.json'

const runsOnServerSide = typeof window === 'undefined'

const resources = {
  en: { translation: en },
  fr: { translation: fr },
}

// Manual language detection
// We default to the fallback language, but if we can detect a supported language in the URL, we use it.
let detectedLng = 'fr'; // Default fallback
if (!runsOnServerSide) {
  try {
    const path = window.location.pathname;
    const pathSegment = path.split('/')[1];
    if (languages.includes(pathSegment)) {
      detectedLng = pathSegment;
    }
  } catch (e) {
    console.error("Failed to detect language from path", e);
  }
}

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    ...getOptions(),
    lng: detectedLng,
    resources,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : []
  })

export function useTranslation(lng: string, ns?: string, options: any = {}) {
  const [cookies, setCookie] = useCookies([cookieName])
  const ret = useTranslationOrg(ns, { ...options, lng })
  const { i18n } = ret

  // Server-side: switch language immediately if needed
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  } else {
    // Client-side: handle language switching and cookies
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

    // If the language passed to the hook (from URL params) is different from the i18n language,
    // and we are on the client, we should sync them.
    // However, for the initial render, we rely on the initialization logic above.

    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return
      setActiveLng(i18n.resolvedLanguage)
    }, [activeLng, i18n.resolvedLanguage])

    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return
      i18n.changeLanguage(lng)
    }, [lng, i18n])

    useEffect(() => {
      if (cookies.i18next === lng) return
      setCookie(cookieName, lng, { path: '/' })
    }, [lng, cookies.i18next])
  }
  return ret
}
