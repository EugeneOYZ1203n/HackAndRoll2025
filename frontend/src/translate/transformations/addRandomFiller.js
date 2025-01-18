const trendyPhrases = [
    "slay", "no cap", "vibes", "bet", "fr", "omg", "lol", "lit", 
    "cap", "mood", "savage", "yo", "facts", "deadass",
    "lowkey", "highkey"
];

const getRandomTrendyPhrase = () => {
    const randomIndex = Math.floor(Math.random() * trendyPhrases.length);
    return trendyPhrases[randomIndex];
};

// Function to insert a trendy phrase randomly into the text
export const insertTrendyPhrase = (text, probability = 0.1) => {
    const words = text.split(' '); // Split the text into words

    // Loop through the words and insert trendy phrases at random positions
    const resultWords = words.map((word, index) => {
        // Randomly decide whether to insert a trendy phrase
        if (Math.random() < probability) {
            const randomPhrase = getRandomTrendyPhrase();
            const insertPosition = Math.random() < 0.5 ? 'before' : 'after'; // Randomly choose to insert before or after the word
            
            if (insertPosition === 'before') {
                return randomPhrase + ' ' + word; // Insert before the word
            } else {
                return word + ' ' + randomPhrase; // Insert after the word
            }
        }
        return word;
    });

    // Join the words back together into a sentence
    return resultWords.join(' ');
};