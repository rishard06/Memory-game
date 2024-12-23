export default function Cards({ imgUrl, name }) {
    return (
        <div className="card">
            <img src={imgUrl} alt="hello" />
            <p>{name} </p>
        </div>  
    )
}