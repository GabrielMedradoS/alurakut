import React from "react";
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades) {
  return (
    <Box>
      {/* Bigode para usar o que esta no javascript dentro do html */}
      <img src={ `https://github.com/${propriedades.user}.png` } style={{ borderRadius: "8px" }} />
     
      <br></br>
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.user}`}>
          @{propriedades.user}
        </a>
      </p> 
      <br></br>
    
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [communities, setCommunities] = React.useState([{
    title:'Eu odeio acordar cedo',
    image:'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]); /* importando from react */
/*   const communities = communities[0];
  const setCommunities = communities[1]; mostrando manualmente o processo*/ 
  const user = "GabrielMedradoS";
  /* const communities = ["Alurakut"]; */
  const favUsers = ["juunegreiros", "omariosouto", "peas"]

  /* Importante: componente sempre com letra maiuscula */
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: "profileArea"}}>
            <ProfileSideBar user={user} /> {/* este componente vai receber uma propriedade user */}
        </div>


        <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
          <Box>
            <h1 className="title">
              Welcome
            </h1>
            <OrkutNostalgicIconSet />
          </Box>


          <Box>
            <h2>Oque você deseja fazer ?</h2>
            <form onSubmit={ function handleNewCommunities(e) {
              e.preventDefault();
              const dataForm = new FormData(e.target);

              const community = {
                title: dataForm.get('title'),
                image: dataForm.get('image'),
              }

              const communitiesAtt = [...communities, community];
              setCommunities(communitiesAtt)
            }}>

              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?" name="title" aria-label="Qual vai ser o nome da sua comunidade?" />
              </div>

              <div>
                <input placeholder="Coloque uma URL para usar como capa" name="image" aria-label="Coloque uma URL para usar como capa" />
              </div>

              <button>
                Criar comunidade
              </button>

            </form>
          </Box>
        </div>


        <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
          <ul>
            {communities.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>  
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
          Communities ({favUsers.length})
            </h2>

          <ul>
            {favUsers.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>          
          </ProfileRelationsBoxWrapper>
        </div>


      </MainGrid>
    </>
  )
}
