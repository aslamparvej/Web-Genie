import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-expect-error ClerkProvider uses VITE_CLERK_PUBLISHABLE_KEY environment variable at runtime */}
    <ClerkProvider>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
