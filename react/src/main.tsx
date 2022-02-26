import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

// エラー時のフォールバック用のコンポーネント
const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Error Message</p>
      <pre>{error!.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
