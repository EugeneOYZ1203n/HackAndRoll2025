import { useState } from 'react'
import './App.css'
import NewsPost from './pages/NewsPost'
import data from './DummyData'

const App = () => {
  return (
    
    <NewsPost articleData = {data[0]}/>
  )
}

export default App
