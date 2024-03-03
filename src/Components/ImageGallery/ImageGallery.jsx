import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
    return (    
        <ul>
            {items.map((item) => (
                <li key={item.objectId}>
                    <div>
                        <img src={`/photos/${item.id}`} alt={item.title} />
                    </div>
                </li>
            ))}
        </ul>           
    );
}
