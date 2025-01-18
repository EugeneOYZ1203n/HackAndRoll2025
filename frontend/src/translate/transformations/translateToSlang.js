import { news_words } from "../translations/news_words"
import { verbs } from "../translations/verbs"
import { disaster_words } from "../translations/disaster_words"
import { nouns } from "../translations/nouns"
import { tech_words } from "../translations/tech_words"
import { filler_word } from "../translations/filler_words"
import { time_words } from '../translations/time_words';
import { work_words } from "../translations/work_words"

const getTranslations = () => {
    return {
        ...news_words,
        ...verbs,
        ...disaster_words,
        ...nouns,
        ...tech_words,
        ...filler_word,
        ...time_words,
        ...work_words
    }
}

function removePunctuationAndReturn(text) {
    // Regular expression to match all punctuation
    const punctuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
  
    // Array to store removed punctuation
    const removedPunctuation = text.match(punctuationRegex) || [];
  
    // Text without punctuation
    const textWithoutPunctuation = text.replace(punctuationRegex, "");
  
    // Return both the cleaned text and the removed punctuation
    return [
      textWithoutPunctuation,
      removedPunctuation.join('')
    ];
}

export function translateToSlang(text) {
    text = text.split(' ')
    const translations = getTranslations()

    let output = text.map((el, ind)=>{
        let [term,removed] = removePunctuationAndReturn(el.toLowerCase())
        
        if (term in translations) {
            let possible_terms = translations[term];
            let index = Math.floor(Math.random()*possible_terms.length)
            return `${possible_terms[index]}${removed}`
        } else {
            return el
        }
    }).join(' ')

    return output
}