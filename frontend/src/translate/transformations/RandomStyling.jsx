const styleOptions = [
    { probability: 0.50, style: {} }, // No style
    { probability: 0.15, style: { fontWeight: 'bold' } }, // Bold
    { probability: 0.15, style: { fontStyle: 'italic' } }, // Italic
    { probability: 0.05, style: { fontWeight: 'bold', fontStyle: 'italic' } }, // Bold and italic
    { probability: 0.05, style: { color: '#f28b82' } }, // Light red (pastel red)
    { probability: 0.05, style: { color: '#aecbfa' } }, // Light blue (pastel blue)
    { probability: 0.05, style: { textDecoration: 'underline' } }, // Underlined text
];

const getRandomStyle = () => {
    let randomStyle = Math.random();
    let style = {};

    for (let option of styleOptions) {
        if (randomStyle < option.probability) {
            style = option.style;
            break;
        }
        randomStyle -= option.probability;
    }
    return style
}

const RandomStyling = ({ text }) => {
    return <div>{text.split(" ").map((word, ind) => {
        const style = getRandomStyle()
        return (<span key={ind} style={style}>{word} </span>);  // If no emoji is found, return the word as is
    })}</div>;
}

export default RandomStyling