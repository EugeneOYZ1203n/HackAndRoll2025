import { useState } from 'react'
import './App.css'
import NewsPost from './pages/NewsPost'
import data from './DummyData'
import SearchBar from './pages/SearchBar'
import { VStack } from '@chakra-ui/react'

const App = () => {
  const [articleData, setArticleData] = useState(data); // article data is an array of 
  return (
    <VStack>
      <SearchBar setArticleData = {setArticleData} />
      <NewsPost articleData = {articleData[0]}/>
    </VStack>
  )
}

export default App
