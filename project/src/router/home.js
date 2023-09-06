import { useNavigate} from "react-router-dom";

export default function Home()
{
    const navi=useNavigate();
    function change()
    {
        navi('/secondpage')
    }
    return(
        <>
            <h1>Helo</h1>
            <button onClick={change}>Second page</button>
        </>
    )
}