import { useState } from 'react'
import './App.css'
import NewsPost from './pages/NewsPost'
import data from './DummyData'
import SearchBar from './pages/SearchBar'
import { VStack } from '@chakra-ui/react'

const App = () => {
  return (
    <VStack>
      <SearchBar></SearchBar>
      <NewsPost articleData = {data[0]}/>
    </VStack>
  )
}

export default App
