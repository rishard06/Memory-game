export default function gameController(array) {
    const suffled = [...array];
    for(let i = suffled.length; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [suffled[i], suffled[j]] = [suffled[j], suffled[i]]
    }
    return suffled;
}