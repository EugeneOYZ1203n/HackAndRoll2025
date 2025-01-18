import { InputGroup } from "@/components/ui/input-group";
import { Button, Input, Group } from "@chakra-ui/react"
import { useState } from "react";

const SearchBar = ({setArticleData}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value); // Update state with user input
    }
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-12-18&sortBy=publishedAt&language=en&apiKey=a4ae6e84428346979de39ed52cb40cf6`
    const handleSearch = () => {
        let fetchRes = fetch(url);
        fetchRes.then(res => res.json())
            .then((data) => {
                const articles = data.articles;
                console.log(data.articles[0])
                setArticleData((data.articles))
            } 
        )
    }
    return (
        <Group>
            <Input 
                placeholder = "Hit me up with a search!"
                value = {searchQuery}
                onChange = {handleInputChange}
            />
            <Button onClick = {handleSearch}>Search</Button>
        </Group>
    )
}

export default SearchBar