import { useState, useEffect } from "react"
import Cards from "./div-card.jsx";
import gameController from "./gameController.jsx";

export default function Card() {
    // const [names, setNames] = useState([]);
    const [image, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
                const mainData = await response.json();
                
                const imgPromise = mainData.results.map(async (item) => {
                    const pokemonUrl = await fetch(item.url);
                    const response = await pokemonUrl.json();
                    return {
                        name: item.name,
                        url: response.sprites.front_default,
                        id: response.id,
                    }
                });
                const imageData = await Promise.all(imgPromise);
                setImages(imageData.slice(0, 10))
            } catch {
                console.error("Error");
            }
        }

        fetchData()
    }, [])

    const shuffledCards = () => {
        const shuffled = gameController(image).filter(item => item !== undefined);
        setImages(shuffled)
        return shuffled;
    }

    return (
        <section className="pokemon-cards">
            {image.map((items, index) => {
                return (
                    <Cards 
                        onClick={shuffledCards
                        }
                        key={index}
                        imgUrl={items.url} 
                        name={items.name} 
                        />
                )
            })}
        </section>
    )
}