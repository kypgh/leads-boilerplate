'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ContactModal } from '@/components/ContactModal'

const ContactModalContext = createContext<{ open: () => void }>({ open: () => {} })

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ContactModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ContactModalContext.Provider>
  )
}

export const useContactModal = () => useContext(ContactModalContext)
