import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react"
import { useState } from "react";


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value); // Update state with user input
    }
    return(
        <InputGroup>
            <Input 
                placeholder = "Hit me up with a search!"
                value = {searchQuery}
                onChange = {handleInputChange}
            />
        </InputGroup>
            
        
    )
}

export default SearchBar