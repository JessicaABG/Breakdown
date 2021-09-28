import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";


function ReviewForm() {
    
let params = useParams();
let history = useHistory();
const [rating, setRating] = useState("");
const [comment, setComment] = useState("");

const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airTableBase}/Songs`;

const config = {
    headers: {
    Authorization: `Bearer ${airTableKey}`,
    },
};
const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = { Rating: Number(rating), Comment: comment };
    await axios.patch(`${URL}/${params.id}`, { fields }, config);
    history.push("/reviews");
};
return (
    <div>
    New Song-comment
    <form onSubmit={handleSubmit}>
        
        <input
        name="rating"
        type="text"
        placeholder="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        />

        <input
        name="comment"
        type="text"
        placeholder="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Add Review</button>

    </form>
    </div>
);
}

export default ReviewForm;
