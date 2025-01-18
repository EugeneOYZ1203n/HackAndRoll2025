import { Heading } from "@chakra-ui/react"

const NewsPost = ({articleData}) => {
    const postTitle = articleData.title;
    return (
        <Heading>
            {postTitle}
        </Heading>
    )
}
export default NewsPost