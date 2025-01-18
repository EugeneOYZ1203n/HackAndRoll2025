export const replaceWithEmojis = (text) => {
    // Define the word-to-emoji dictionary
    const emojiDictionary = {
        happy: "😀",
        sad: "😢",
        love: "❤️",
        fire: "🔥",
        cool: "😎",
        party: "🎉",
        heart: "💖",
        cat: "🐱",
        dog: "🐶",
        laugh: "😂",
        money: "💰",
        eyes: "👀",
        thumbsUp: "👍",
        peace: "✌️",
        star: "⭐",
        music: "🎶",
        coffee: "☕",
        sleep: "😴",
        angry: "😡",
        clap: "👏",
    };

    // Split the text into words and replace each word if it has an emoji
    return text.split(" ").map((word) => {
        const lowerWord = word.toLowerCase();
        if (emojiDictionary[lowerWord]) {
            return emojiDictionary[lowerWord];  // Replace word with emoji
        }
        return word;  // If no emoji is found, return the word as is
    }).join(" ");
};