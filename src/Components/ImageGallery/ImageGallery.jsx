export default function ImageGallery({ item }) {
    return (
        <ul>
            {items.map((item) => (
            <li key={item.objectId}>
                <div>
                    <img src="/photos/:id" alt="" />
                </div>
                </li>
                 ))}
        </ul>
    );
}


