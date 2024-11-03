import React, { useEffect ,useState} from "react";



function Task(){
    const [monster,setMonster]=useState([])
    const fetchInfo=()=>{
        fetch('https://mhw-db.com/monsters')
        .then(response => response.json())
        .then(monsters => {
            // your code here
        });
    
    
    useEffect(()=>{
        fetchInfo()
    },[])
    }
    
 return(
 <div>
    <h1>monsters</h1>
 <table>
    <tr>
        <th>id</th>
        <th>name</th>
        <th>type</th>
        <th>speices</th>
    </tr>
    {monsters.map(monster=>(<tr key={monster.id}>
            {/* <td></td> */}
            <td>{monster.name}</td>
            <td>{monster.type}</td>
            <td>{monster.species}</td>
        </tr>)
        
    )}
 </table>
 </div>
 )

}
export default Task