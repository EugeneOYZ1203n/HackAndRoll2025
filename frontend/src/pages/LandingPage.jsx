import { VStack } from "@chakra-ui/react"
import SearchBarWithFilters from "./SearchBarWithFilters"
import LandingPosts from "./LandingPosts"
import { useState } from "react"
import data from "@/DummyData"

const LandingPage = () => {
    const [articleData, setArticleData] = useState(data); 
    return (
        <VStack>
          <SearchBarWithFilters setArticleData = {setArticleData} />
          <LandingPosts data={articleData}/>
        </VStack>
    )
}

export default LandingPage