import { VStack } from "@chakra-ui/react";
import NewsPost from "./NewsPost";


const NewsList = ({data}) => {
    return(
        <VStack spacing = '10px'>
            <NewsPost data = {data[0]}/>
        </VStack>
    );
}

export default NewsList

