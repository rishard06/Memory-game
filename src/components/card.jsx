import { useState, useEffect } from "react"

export default function Card() {
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchData = async() => {
           const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
           const data = await response.json();
        //    const data2 = 
           console.log(data.sprites);
        //    console.log(image);
           setImage(data.sprites.front_shiny);
        }

        fetchData()
            .catch(console.error);
    }, [])

    return (
        <section>
            <img src={image} alt="helo" />
            <div></div>
        </section>
    )
}