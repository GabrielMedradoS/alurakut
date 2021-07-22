import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades) {
  return (
    <Box>
      {/* Bigode para usar o que esta no javascript dentro do html */}
      <img src={ `https://github.com/${propriedades.user}.png` } style={{ borderRadius: "8px" }}/>
    </Box>
  )
}

export default function Home() {
  const user = "GabrielMedradoS";
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
        </div>

        <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
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
