import { FC } from 'react'
import './App.css'


// 定期的にエラーを起こすコンポーネント
export const App: FC = () => {
  const rnd = Math.random()
  console.log(rnd)
  if (rnd <= 0.6) {
    throw new Error('Something went wrong!')
  }
  return <div>OK</div>
}
