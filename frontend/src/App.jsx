import { useState } from 'react'
import './App.css'
import NewsPost from './pages/NewsPost'
import SearchBar from './pages/SearchBar'
import { VStack } from '@chakra-ui/react'
import data from './DummyData'
import LandingPosts from './pages/LandingPosts'
import SearchBarWithFilters from './pages/SearchBarWithFilters'

const App = () => {
  const [articleData, setArticleData] = useState(data); // article data is an array of 
  return (
    <VStack>
      <SearchBarWithFilters setArticleData = {setArticleData} />
      <LandingPosts data={articleData}/>
    </VStack>
  )
}

export default App
