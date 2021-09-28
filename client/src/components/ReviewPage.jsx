import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';




const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airTableBase}/Songs`;

    const config = {
    headers: {
    Authorization: `Bearer ${airTableKey}`,
    },
};

    export default function ReviewPage() {
const [Songs, setSongs]=useState({});
const [loading, setLoading] = useState(true);
// const { id } = useParams();


useEffect(()=>{
    const fetchSong = async()=>{
        const res = await axios.get(`${URL}`, config);
        setSongs(res.data.records);
        // console.log(res.data.records);
        setLoading(false);
        console.log(res);
    };

        fetchSong();
    

}, []);

if (loading) {
    return <div>LOADING!!!!</div>;
};

return (
    <div>
    {Songs.map((Song)=>(
        <Link to = {`/songs/${Song.id}`} key={Song.id}><ul key={Song.id}> Song: {Song.fields.Title}, Rating:{Song.fields.Rating}, Comment:{Song.fields.Comment}</ul></Link>
    ))}
    </div>
);
}
