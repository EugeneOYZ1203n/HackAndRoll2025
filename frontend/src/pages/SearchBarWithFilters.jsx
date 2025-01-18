import { Box, Flex, HStack } from "@chakra-ui/react"
import SearchBar from "./SearchBar"
import { useState } from "react";
import FilterSelection from "./FilterSelection";

const SearchBarWithFilters = ({setArticleData}) => {
    const [searchInput, setSearchInput] = useState("");
    const handleInputChange = (event) => {
        setSearchInput(event.target.value); // Update state with user input
    }
    const [languageRadioSelection, setLanguageRadioSelection] = useState('English')
    
    const language_selections = {
        English: 'en',
        French: 'fr',
        Espanol: "es"
    }
    const filterString = 
        `&from=2024-12-18&sortBy=relevancy&searchIn=title&language=${language_selections[languageRadioSelection]}`
    const url = `https://newsapi.org/v2/everything?q=${searchInput}${filterString}&apiKey=a4ae6e84428346979de39ed52cb40cf6`
    
    const postQueryFilterPred = arti => arti.title !== '[Removed]'
    const handleSearch = () => {
        console.log(url)
        let fetchRes = fetch(url);
        fetchRes.then(res => res.json())
            .then((data) => {
                console.log(data)
                const articles = data.articles;
                const filtered_articles = articles.filter(postQueryFilterPred)
                if (articles.length > 0) {
                    setArticleData((filtered_articles))
                }
            })
    }
    return (
        <HStack>
            <SearchBar 
                searchInput={ searchInput }
                handleInputChange={ handleInputChange }
                handleSearch={ handleSearch }
            ></SearchBar>
            <FilterSelection 
                selections = {Object.keys(language_selections)} 
                selected = {languageRadioSelection}
                setSelectedValue={setLanguageRadioSelection}
            />
        </HStack>
    )
}
export default SearchBarWithFilters