import { Heading } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import SlangText from "@/translate/SlangText";

const NewsPost = ({articleData}) => {
    const postTitle = articleData.title;
    const postDescription = articleData.description;
    return (
        <Card.Root width="320px">
            <Card.Body gap="2">
                <Card.Title mt="2"><SlangText text ={postTitle}/></Card.Title>
                <Card.Description>
                    <SlangText text = {postDescription}/>
                </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button variant="outline">Hit me up!</Button>
            </Card.Footer>
        </Card.Root>
    );
}
export default NewsPost;