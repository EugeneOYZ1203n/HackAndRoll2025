import { VStack } from "@chakra-ui/react"
import { Radio, RadioGroup } from "@/components/ui/radio"

const FilterSelection = ({selections, selected, setSelectedValue}) => {
    return (
    <RadioGroup value = {selected} onValueChange = {(e) => setSelectedValue(e.value)}> 
        <VStack>
        {
            selections.map((e, index) => (
                <Radio value = {e} key = {index}>{e}</Radio>
            ))
        }
        </VStack>
    </RadioGroup>)
}

export default FilterSelection
/*

*/