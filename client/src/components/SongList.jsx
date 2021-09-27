import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Route } from 'react-router-dom';
import axios from 'axios';



const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airTableBase}/Songs`;

    const config = {
    headers: {
    Authorization: `Bearer ${airTableKey}`,
    },
};

    export default function SongList() {
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
        // eslint-disable-next-line: what did cory mean by this

}, []);

if (loading) {
    return <div>LOADING!!!!</div>;
};

return (
    <div>
        {console.log(Songs)}
    {Songs.map((Song)=>(
        <Route path = "/"><ul key={Song.id}>{Song.fields.Title}</ul></Route>
    ))}
    </div>
);
}
