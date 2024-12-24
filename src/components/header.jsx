import { useState, useEffect } from "react";

export default function Header({ score }) {
    const [bestScore, setBestScore] = useState(() => {
        return parseInt(localStorage.getItem("bestScore") || "0", 10);
    });

    useEffect(() => {
        if (score >= bestScore) {
            setBestScore(score);
            localStorage.setItem("bestScore", score)
        }
        if (performance.navigation.type === 1) {
            localStorage.setItem("bestScore", 0)
        }
    }, [score, bestScore]);

    return (
        <header>
            <section>
                <h1>Memory Game</h1>
                <p>Click the image only once to get one point</p>
            </section>
            <section>
                <p>Score: {score}</p>
                <p>Best score: {bestScore}</p>
            </section>
        </header>
    )
}