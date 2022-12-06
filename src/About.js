import { Button } from "bootstrap";
import { useState } from "react";

const About = ()=>{
    // const firstname= 'Ahmed';
   const [firstname, setFirstname]= useState('Ahmed');
   const [secondname, setSecondname]= useState('Mohammed');
   const [age, setAge]= useState(22);
    
    const changeName = ()=>{
        //  firstname = "mohammed";
        setFirstname("Omar");
        setSecondname('Ahmed');
        setAge(10);
        // console.log(firstname);
    }
return(
    <div className="container">
        <h1>About Page</h1>
        <h2>{firstname} {}{}{secondname}  {age}</h2>
        
<br/>
<button onClick={changeName} type="button" className="btm btm-primary">Ahmed</button>
    </div>

);
}
export default About;