import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { ErrorFallback } from './components/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
