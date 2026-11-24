import { useNavigate } from "react-router";

function BackButton() {
    const navigate = useNavigate();

    return (
        <button className="back-button" onClick={() => navigate(-1)}>
            ← Předchozí stránka
        </button>
    );
}

export default BackButton;