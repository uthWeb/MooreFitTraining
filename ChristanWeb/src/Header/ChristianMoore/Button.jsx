import "./Title.css";

function Button() {

    /*fix later*/
    const handleScroll = () => {
        const target = document.getElementById("target-section");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <h2 className="Arrow" onClick={handleScroll}>⬇️</h2>
        </>
    );
}

export default Button;
