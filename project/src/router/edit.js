import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";

export default function Edit() {
    const [id, setid] = useState(0);
    const [name, setname] = useState('');
    const [num, setnum] = useState('');
    const [age, setage] = useState('');
    const [resume, setResume] = useState('');
    const [view, setview] = useState([]);
    const navi=useNavigate()
    function submit(e){
        e.preventDefault();
        axios.put(`${API}/${id}`,{username:name,userid:num,userage:age,useresume:resume});
        navi('/secondpage')
    }
    useEffect(()=>{
        setid(localStorage.getItem('id'));
        setname(localStorage.getItem('username'));
        setnum(localStorage.getItem('userid'));
        setage(localStorage.getItem('userage'));
        setResume(localStorage.getItem('useResume'));

    },[])
    return (
        <>
        <h1>Edit ur data</h1>
            <form onSubmit={submit}>

                <table>
                    <tr>
                        <td> <input type="text" value={name} onChange={(e) => setname(e.target.value)}/></td>
                        <td> <input type="num" value={num} onChange={(e) => setnum(e.target.value)} /></td>
                        <td> <input type="num" value={age} onChange={(e) => setage(e.target.value)} /></td>
                    </tr>
                </table>


                <input type="submit" />


            </form>
        </>
    )
}