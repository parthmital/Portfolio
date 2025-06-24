export function Project({ title, image, description, tags, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="Project">
            <img src={image} alt={title} />
            <div className="ProjectDetails">
                <p className="Font20 FontSemiBold">{title}</p>
                <p className="Font16 FontGrey">{description}</p>
                <div className="ProjectTags">
                    {tags.map((tag, i) => (
                        <div
                            key={i}
                            className="ProjectTag Font12 FontSemiBold FontBlack"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
}