import { VStack } from "@chakra-ui/react"
import { Radio, RadioGroup } from "@/components/ui/radio"

const FilterSelection = ({selections, selected, setSelectedValue}) => {
    const selectionKeys = Object.keys(selections);
    return (
    <RadioGroup value = {selected} onValueChange = {(e) => setSelectedValue(e.value)}> 
        <VStack>
        {
            selectionKeys.map((e, index) => (
                <Radio value = {selections[e]} key = {index}>{e}</Radio>
            ))
        }
        </VStack>
    </RadioGroup>)
}

export default FilterSelection
/*

*/