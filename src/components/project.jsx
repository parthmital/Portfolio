export function Project() {
    return (
        <div className="Project">
            <img src="Work.png" />
            <div className="ProjectDetails">
                <p className="Font20 FontSemiBold">E-Commerce Platform</p>
                <p className="Font16 FontGrey">
                    A full-stack e-commerce solution with React, Node.js, and Stripe
                    integration.
                </p>
                <div className="ProjectTags">
                    <div className="ProjectTag Font12 FontSemiBold FontBlack">
                        React
                    </div>
                    <div className="ProjectTag Font12 FontSemiBold FontBlack">
                        Node.js
                    </div>
                    <div className="ProjectTag Font12 FontSemiBold FontBlack">
                        MongoDB
                    </div>
                </div>
            </div>
        </div>
    )
}