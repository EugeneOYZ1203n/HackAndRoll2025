const createRandomTypos = (word) => {
    // A list of similar sounding character replacements
    const similarSoundingChars = {
        's': ['z'],
        'z': ['s'],
        'c': ['k'],
        'k': ['c'],
        'o': ['0'],
        'i': ['1'],
        'e': ['3'],
        'a': ['@'],
        't': ['7'],
        'l': ['1'],
        // Add more mappings if needed
    };

    // Probability weights (adjust these as needed)
    const weights = [0.5, 0.3, 0.1, 0.07, 0.03]; // Sum of weights = 1

    // Get a random number between 0 and 1
    const randomValue = Math.random();
    let cumulativeWeight = 0;

    // Determine typo type based on weighted probabilities
    let typoType;
    for (let i = 0; i < weights.length; i++) {
        cumulativeWeight += weights[i];
        if (randomValue < cumulativeWeight) {
            typoType = i;
            break;
        }
    }

    switch (typoType) {
        case 0: // Remove a random character
            return removeRandomChar(word);
        case 1: // Replace a random character with a similar-sounding one
            return replaceWithSimilarSoundingChar(word, similarSoundingChars);
        case 2: // Swap adjacent characters
            return swapAdjacentChars(word);
        case 3: // Insert a random character
            return duplicateRandomChar(word)
        case 4:
            return insertRandomChar(word);
        default:
            return word;
    }
};

// Function to remove a random character from the word
const removeRandomChar = (word) => {
    const index = Math.floor(Math.random() * word.length); // Random index to remove
    return word.slice(0, index) + word.slice(index + 1);
};

// Function to replace a random character with a similar-sounding one
const replaceWithSimilarSoundingChar = (word, similarSoundingChars) => {
    const index = Math.floor(Math.random() * word.length); // Pick a random index
    const char = word[index].toLowerCase(); // Get the character at that index
    const replacements = similarSoundingChars[char]; // Find possible replacements
    if (replacements) {
        const randomReplacement = replacements[Math.floor(Math.random() * replacements.length)]; // Pick a random replacement
        return word.slice(0, index) + randomReplacement + word.slice(index + 1); // Replace character
    }
    return word;
};

// Function to swap two adjacent characters
const swapAdjacentChars = (word) => {
    if (word.length < 2) return word; // If the word is too short to swap, return it as is
    const index = Math.floor(Math.random() * (word.length - 1)); // Pick a random index to swap with the next character
    const swappedWord = word.slice(0, index) + word[index + 1] + word[index] + word.slice(index + 2);
    return swappedWord;
};

const duplicateRandomChar = (word) => {
    if (word.length === 0) return word; // If the word is empty, return it as is.

    const randomIndex = Math.floor(Math.random() * word.length); // Random index to select a character
    const charToDuplicate = word.charAt(randomIndex); // Get the character at the random index

    return word.slice(0, randomIndex) + charToDuplicate + word.slice(randomIndex);
};

// Function to insert a random character
const insertRandomChar = (word) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Characters to insert
    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length)); // Random character
    const randomIndex = Math.floor(Math.random() * (word.length + 1)); // Random index to insert
    return word.slice(0, randomIndex) + randomChar + word.slice(randomIndex);
};

export const addTypos = (text) => {
    return text.split(" ").map((word) => {
        return Math.random() > 0.93 ? createRandomTypos(word) : word;  // If no emoji is found, return the word as is
    }).join(" ");
}