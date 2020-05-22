import React,{Component} from 'react'
import myStyle from './myStyle.css'
import intern from './intern.jpeg'
import agra from './agra.jpg'

class Revidly extends Component{

    render(){
        return(
            <div className="container-fluid mx-auto" style={{padding: "20px"}}>
            <nav className="navbar">
                <h1 className="nav-link" href="#" style={{padding:"10px 10px 10px 30px"}}>Revidly</h1>
                <div style={{padding: "10px 30px 20px 0",}}>
                    <a style={{padding: "10px",color:"black"}} href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-user-plus fa-2x" aria-hidden="true"></i>   
                    </a>
                    <a style={{padding: "10px",color:"black"}} href="#" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-pencil fa-2x" aria-hidden="true"></i> 
                    </a>
                </div>            
            </nav>

            <div>
                <input className="form-control" type="text" placeholder="Search  Clan" style={{padding: "10px",
                    backgroundColor:"lightgrey",borderRadius:"10px"}}>    
                </input>
            </div>
                
            <ul className="nav nav-justified" style={{borderBottom:" 1px solid grey"}}>
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#clans">CLANS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#more">MORE</a>
                </li>
            </ul>
            <div className="tab-content" style={{padding:"10px"}}>

                <div id="clans" className="container mx-auto tab-pane active">
                    <a className="noDecoration" href="#" style={{textDecoration:"none"}}>
                        <div className="container row" style={{padding:"0 20px 5px 30px",borderBottom:"1px solid grey"}}>
                            <i className="fa fa-plus fa-3x ls"></i>
                            <span style={{padding:"0 50px"}}>
                                <strong>Create a Clan</strong><br />
                                <span>public or private</span>
                            </span>
                        </div>
                    </a>
                    <a className="noDecoration" href="#" style={{textDecoration:"none"}}>
                        <div className="container row" style={{padding:"5px 20px 5px 30px",borderBottom:"1px solid grey"}}>
                            <img src={intern} width="50" height="50"/>
                            <span style={{padding:"0 50px"}}>
                                <strong>Internship</strong><br />
                                <span>No New Posts</span>
                            </span>
                        </div>
                    </a>
                </div>

                <div id="more" className="container mx-auto tab-pane fade">
                    <a className="noDecoration" href="#" style={{textDecoration:"none"}}>
                        <div className="container row" style={{padding:"0 20px 5px 30px",borderBottom:"1px solid grey"}}>
                            <img src={agra} width="50" height="50"/>
                            <span style={{padding:"0 50px"}}>
                                <strong>Agra Hindi News</strong>
                            </span>
                            <a className="float-right" style={{textAlign:"right",color:"blue"}}>Join</a>
                        </div>
                    </a>
                    <a className="noDecoration" href="#" style={{textDecoration:"none"}}>
                        <div className="container row" style={{padding:"5px 20px 5px 30px",borderBottom:"1px solid grey"}}>
                            <img src={intern} width="50" height="50"/>
                            <span style={{padding:"0 50px"}}>
                                <strong>Ahmedabad Hindi News</strong>
                            </span>
                            <a style={{float:"right",color:"blue"}}>Join</a>
                        </div>
                    </a>
                    <a className="noDecoration" href="#" style={{textDecoration:"none"}}>
                        <div className="container row" style={{padding:"5px 20px 5px 30px",borderBottom:"1px solid grey"}}>
                            <i className="fa fa-user fa-3x"/>
                            <span style={{padding:"0 50px"}}>
                                <strong>Allahabad Snaps</strong>
                            </span>
                            <a style={{float:"right",color:"blue"}}>Join</a>
                        </div>
                    </a>
                    <a className="noDecoration" href="#" style={{textDecoration:"none"}}>
                        <div className="container row" style={{padding:"5px 20px 5px 30px",borderBottom:"1px solid grey"}}>
                            <i className="fa fa-user fa-3x" style={{color:"blue"}}/>
                            <span style={{padding:"0 50px"}}>
                                <strong>Anayltics</strong>
                            </span>
                            <a style={{float:"right",color:"blue"}}>Join</a>
                        </div>
                    </a>
                </div>

            </div>

            <nav id="myDIV" className="navbar navbar-expand-sm bg-light justify-content-center fixed-bottom lg">
                <a className="nav-link active" href="#">
                    <i class="fa fa-home"></i><br />
                    <span>Home</span>
                </a> 
                <a className="nav-link" href="#">
                    <i className="fa fa-search"></i>
                    <span>Search</span>
                </a>
                <a className="nav-link" href="#">
                    <i className="fa fa-plus"></i>
                    <span>Post</span>
                </a>
                <a className="nav-link" href="#">
                    <i className="fa fa-bell-o"></i>
                    <span>Notifications</span>
                </a>
                <a className="nav-link" href="#">
                    <i className="fa fa-user-circle-o"></i>
                    <span>Profile</span>
                </a>
            </nav>
        </div>
        )
    }
}

export default Revidly