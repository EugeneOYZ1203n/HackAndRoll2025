export const randomSentenceStructure = (text, swapFraction = 0.2) => {
    // Step 1: Split the text into sentences based on punctuation marks.
    const sentences = text.split(/([.!?])/).filter(Boolean); // Keeps punctuation as part of the sentence.

    // Step 2: Process each sentence
    const alteredSentences = sentences.map(sentence => {
        // Remove the punctuation for now to shuffle the words
        const cleanSentence = sentence.trim().replace(/[.!?]/, '');
        
        // Split sentence into words
        const words = cleanSentence.split(' ');

        // Chunk the sentence into 2-3 word chunks
        const chunks = createChunks(words, 2); // Change 2 to another number for larger or smaller chunks

        // Step 3: Swap neighboring chunks based on the specified fraction
        const swappedChunks = swapNeighboringChunks(chunks, swapFraction);

        // Step 4: Reassemble the sentence with punctuation
        const punctuation = sentence.slice(-1); // Get the punctuation (if any)
        return swappedChunks.join(' ') + punctuation;
    });

    // Step 5: Join the altered sentences back into a single string
    return alteredSentences.join(' ');
};

// Function to chunk words into smaller groups
const createChunks = (words, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < words.length; i += chunkSize) {
        chunks.push(words.slice(i, i + chunkSize).join(' ')); // Join chunked words back into strings
    }
    return chunks;
};

// Function to swap neighboring chunks based on a fraction
const swapNeighboringChunks = (chunks, swapFraction) => {
    const totalChunks = chunks.length;
    let numChunksToSwap = Math.floor(totalChunks * swapFraction); // Determine how many chunks to swap

    // Randomly select chunks to swap (only neighboring ones)
    const swappedChunks = [...chunks];

    for (let i = 0; i < totalChunks - 1 && numChunksToSwap > 0; i++) {
        if (Math.random() < swapFraction) {
            // Swap chunk at i with chunk at i + 1
            [swappedChunks[i], swappedChunks[i + 1]] = [swappedChunks[i + 1], swappedChunks[i]];

            // Decrease the number of swaps left to make
            numChunksToSwap--;
            i++; // Skip the next chunk since it's already swapped
        }
    }

    return swappedChunks;
};