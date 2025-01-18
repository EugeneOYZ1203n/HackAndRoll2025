import { useState } from 'react'
import './App.css'
import NewsPost from './pages/NewsPost'
import SearchBar from './pages/SearchBar'
import { VStack } from '@chakra-ui/react'
import data from './DummyData'
import LandingPosts from './pages/LandingPosts'

const App = () => {
  const [articleData, setArticleData] = useState(data); // article data is an array of 
  return (
    <VStack>
      <SearchBar setArticleData = {setArticleData} />
      <LandingPosts data={data}/>
    </VStack>
  )
}

export default App
