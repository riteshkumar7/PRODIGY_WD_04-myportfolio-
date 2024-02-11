import "./home.css"
import { Icon } from 'semantic-ui-react'
const Home=()=>{
        const DownloadCV=()=>{
            const pdfUrl= "resume.pdf";
            const link = document.createElement("a");
            link.href=pdfUrl;
            link.download="resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };   
    return(
        <div className="home">
            <div className="pic"><img src="./front.png" alt="Placeholder Image"/>
        <div className="content">
        <p className="para">System.out.Println("Hello Everyone");<br/>This is<h1>Ritesh Kushwaha.</h1><br/>
        ,I am from Prayagraj, Uttar Pradesh.
        I am a Frontend ,Backend Developer and Full stack developer.<br/><br/>
        <button className="cv" onClick={DownloadCV}>Resume <Icon name='download' size='small'/></button>
        </p>        
        </div>
        </div>
        </div>
    );
}
export default Home;