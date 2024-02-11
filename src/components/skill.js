import "./skill.css"
const Skill=()=>{
    return(
        <div className="skill">
            <span   className="head">Skill</span>
            <div className="boxes2"></div>
        <div className="boxes">
            <b className="skills">
            <h2>Technical Skills</h2>
                <p><h3>Frontend Development </h3><br/>HTML, CSS,JavaScript, React.JS</p>
                <p><h3>Backend Development </h3><br/>Node.JS, Express, Restful API</p>
                <p><h3>Database Management </h3><br/>MongoDB, MySQL</p>
                <p><h3>Devops</h3><br/>Postman, Compass, Git, GitHub</p>
                <p><h3>DSA</h3><br/>Stack, Queue, Array, HashMap, Tree</p>
            </b>
            <b className="skills1">
            <h2>Soft Skills</h2>
                <p>Hard working, <br/>Willingness to learn new things,  <br/>Disciplined and good etiquette,<br/>Problem Solving, <br/>Decision making, <br/> Creativity</p>
            </b>
            </div> 
        <div className="boxes1"></div> 
        </div>
    );
}
export default Skill;