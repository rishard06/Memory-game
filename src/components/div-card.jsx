export default function Cards({ imgUrl, name, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={imgUrl} alt="hello" />
            <p>{name} </p>
        </div>  
    )
}