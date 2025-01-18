import { InputGroup } from "@/components/ui/input-group";
import { Button, Input, Group } from "@chakra-ui/react"
import { useState } from "react";

const SearchBar = ({searchInput, handleInputChange, handleSearch}) => {
    return (
        <Group>
            <Input 
                placeholder = "Hit me up with a search!"
                value = {searchInput}
                onChange = {handleInputChange}
            />
            <Button onClick = {handleSearch}>Search</Button>
        </Group>
    )
}

export default SearchBar