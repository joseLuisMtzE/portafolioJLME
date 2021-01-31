import './App.css';
import 'antd/dist/antd.css';
import img from './img/jluis2.png'
import bgCode from './img/code.jpg'
import bg from './img/bg.jpg'
import pelao from './img/pelao.jpg'
import perritosapi from './img/perritosapi.png'
import todolist from './img/todolist.png'
import loading from './img/loading.jpg'
import plapitas from './img/plapitas.png'
import { LoadingOutlined } from '@ant-design/icons';

import {Typography,Divider, Spin } from 'antd'; 
const { Title, Text} = Typography;
const antIcon = <LoadingOutlined style={{ fontSize: 35 }} spin />;

function App() {  
  return (
    <div >
      <script src="https://kit.fontawesome.com/03a65e795f.js" crossorigin="anonymous"></script>
      <header>
        <div style={{textAlign:'center', margin:'20px'}}  class="animate__animated animate__fadeInDown">
          <img src={img} alt="Jose Luis Martinez Enciso" className='photo' style={{width: '20%', height:'20%', margin:"5px"}} title='Jose Luis Martinez Enciso' ></img>
          <h1 style={{color: '#0780fe', fontSize:'5vw', margin:"0"}} class="animate__animated animate__fadeInLeft animate__delay-1s">Soy Jose Luis Martinez Enciso</h1>
          <p style={{marginBottom: "50px"}}>
            <Title style={{fontSize: "3vw"}} class="animate__animated animate__fadeInRightBig animate__delay-1s">Front-End Developer</Title>
          </p>
        </div>        
      </header>

      <div style={{backgroundColor:'black', display:'block'}}>
        <div className='background' style={{backgroundImage: `url(${bgCode})`}}>

          <div className='skillsContainer' >
            <div className='skillsImg' >
              <h1 style={{color: 'black', margin:"0", fontSize: '4vw', color: 'white', textShadow: ' 0px 0px 10px black'}}  class="animate__animated animate__fadeIn animate__delay-3s">Skills</h1>
                <div class='row'  style={{display: 'flex'}} class="animate__animated animate__fadeIn animate__delay-3s">
                  <img className='skills' src='https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png' ></img>
                  <img className='skills' src='https://cdn.auth0.com/blog/react-js/react.png'></img>
                  <img className='skills' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png'></img>
                  <img className='skills' src='https://jumpstartrefugee.ca/wp-content/uploads/2020/11/node.png'></img>
                  <img className='skills' src='https://media.slid.es/uploads/26534/images/2848346/Firebase_16-logo.png'></img>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin:'40px'}}>
        <Divider>
          <Title style={{textAlign:'center', fontSize: "4vw"}}> Portafolio</Title>
        </Divider>

        <div class='row' className='portContainer' style={{display:'flex'}}>
          <div className='card'>
            <img src={pelao} style={{borderRadius:"10px", width: '50%'}} title='El Pelao Camamaron (Punto de Venta)'/>
            <h1  style={{margin: '0', fontSize:'2vw'}}>El Pelao Camaron</h1>
            <a href='https://pelaocamaron.netlify.app/'><p  style={{fontSize: '1vw'}}>Ver</p></a>
          </div>
          <div className='card'>
            <img src={perritosapi} style={{borderRadius:"10px", width: '50%'}}/>
            <h1  style={{margin: '0', fontSize:'2vw'}}>Perritos API</h1>
            <a href='https://perritosapi.netlify.app/'><p  style={{fontSize: '1vw'}}>Ver</p></a>
          </div>
          <div className='card'>
            <img src={todolist} style={{borderRadius:"10px", width: '50%'}}/>
            <h1  style={{margin: '0', fontSize:'2vw'}}>To Do List</h1>
            <a href='https://crudtodolist.netlify.app/'><p  style={{fontSize: '1vw'}}>Ver</p></a>
          </div>
          <div className='card'>
            <img src={plapitas} style={{borderRadius:"10px", width: '50%'}}/>
            <h1  style={{margin: '0', fontSize:'2vw'}}>Plapitas Snacks</h1>
            <a href='https://plapitassnacks.netlify.app/'><p  style={{fontSize: '1vw'}}>Ver</p></a>
          </div>
        </div>   
      </div>

      <div style={{ margin:'40px'}}>
        <Divider> <Title style={{textAlign:'center', fontSize: "4vw"}}>Certificados</Title> </Divider>

        <div class='row' className='portContainer' style={{display:'flex'}}>
          <div className='card'>
            {/*<img src={loading} style={{borderRadius:"10px", width: '25%'}} title='El Pelao Camamaron (Punto de Venta)'/>*/}
            <Spin indicator={antIcon} />
            <h1  style={{margin: '0', fontSize:'2vw'}}>En progreso...</h1>
          </div>
          <div className='card'>
            {/*<img src={loading} style={{borderRadius:"10px", width: '25%'}}/>*/}            
            <Spin indicator={antIcon}/>
            <h1  style={{margin: '0', fontSize:'2vw'}}>En progreso...</h1>
          </div>
          
        </div>  

      </div>

      <footer className='footer'>
        <div >
          <p style={{}}>
            <Title style={{fontSize: "2.5vw", color:'white', margin:'15px'}}>Contacto</Title>
            <h4 style={{fontSize:"1vw", color:'white', fontStyle:'italic'}}><a href="https://goo.gl/maps/EZLWWn2xgPBoqVdZA" className='href'><i class="fas fa-map-marker-alt"/> Colima, Mexico</a></h4>            
            <h4 style={{fontSize:"1vw", color:'white', fontStyle:'italic'}}><i class="far fa-envelope"/> jlmtz62@gmail.com</h4>
            <a href='https://www.instagram.com/_encix_/'><i class="fab fa-instagram" id='icons'></i></a>
            <a href='https://github.com/joseLuisMtzE'><i class="fab fa-github" id='icons'></i></a>
            <a href=''><i class="fab fa-whatsapp" id='icons'></i></a>
            <a href='https://www.linkedin.com/in/jose-luis-martinez-enciso-8583a0198/'><i class="fab fa-linkedin" id='icons'></i></a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
 