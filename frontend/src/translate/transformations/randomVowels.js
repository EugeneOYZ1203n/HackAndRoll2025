const replaceWithRandomVowels = (word) => {
    // Define the vowel pairs and triples you want to handle
    const vowelCombinations = [
        { combination: 'oo', vowels: ['o', 'o'] }, // "oo" should repeat "o" separately
        { combination: 'ou', vowels: ['o', 'u'] }, // "ou" should repeat "o" and "u" separately
        { combination: 'oi', vowels: ['o', 'i'] }, // "oi" should repeat "o" and "i" separately
        { combination: 'iu', vowels: ['i', 'u'] }, // "iu" should repeat "i" and "u" separately
        { combination: 'io', vowels: ['i', 'o'] }, // "io" should repeat "i" and "o" separately
        { combination: 'ia', vowels: ['i', 'a'] }, // "ia" should repeat "i" and "a" separately
        { combination: 'ae', vowels: ['a', 'e'] }, // "ae" should repeat "a" and "e" separately
        { combination: 'ea', vowels: ['e', 'a'] }, // "ea" should repeat "e" and "a" separately
        { combination: 'ei', vowels: ['e', 'i'] }, // "ei" should repeat "e" and "i" separately
        { combination: 'au', vowels: ['a', 'u'] }, // "au" should repeat "a" and "u" separately
        // Add more combinations as needed
    ];

    // Loop through each vowel combination and replace occurrences in the word
    vowelCombinations.forEach(({ combination, vowels }) => {
        const regex = new RegExp(combination, 'g'); // Create a global regex for the vowel pair
        word = word.replace(regex, (match) => {
            // For each match, get two random counts for the vowels in the combination
            const randomCount1 = Math.floor(Math.pow(Math.random(),4) * 4) + 1; // Random number between 1 and 4 for the first vowel
            const randomCount2 = Math.floor(Math.pow(Math.random(),2) * 2) + 1; // Random number between 1 and 4 for the second vowel

            // Repeat the vowels according to their respective random counts
            return vowels[0].repeat(randomCount1) + vowels[1].repeat(randomCount2);
        });
    });

    return word;
};

export const randomVowelLength = (text) => {
    return text.split(" ").map((word) => {
        return replaceWithRandomVowels(word);  // If no emoji is found, return the word as is
    }).join(" ");
}