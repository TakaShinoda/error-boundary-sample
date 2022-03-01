import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

// エラー時のフォールバック用のコンポーネント
export const ErrorFallback: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Error Message</p>
      <pre>{error!.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
