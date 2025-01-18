import React from 'react';
import { translateToSlang } from './transformations/translateToSlang';
import RandomStyling from './transformations/randomStyling';
import { replaceWithEmojis } from './transformations/emojiReplacer';
import { randomVowelLength } from './transformations/randomVowels';
import { addTypos } from './transformations/typoGenerator';
import { randomSentenceStructure } from './transformations/randomizeSentence';
import { insertTrendyPhrase } from './transformations/addRandomFiller';

const SlangText = ({ text }) => {
    //text = randomSentenceStructure(text)
    text = replaceWithEmojis(text)
    text = insertTrendyPhrase(text)
    text = translateToSlang(text)
    text = addTypos(text)
    text = randomVowelLength(text)

    return <RandomStyling text = {text}/>
}

export default SlangText