import styled from 'styled-components'

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;

  `; /* crases para indicar o css da pagina */

const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  display: grid;
  grid-gap: 10px;
  padding: 16px;
    .profileArea {
      display: none;
      @media(min-width: 860px) {
        display: block;
      }
    }

  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
  `;

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{gridArea: "profileArea"}}>
        <Box>
        <img src="https://github.com/GabrielMedradoS.png"/>
        </Box>
      </div>
        
      <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
        <Box>
        Welcome
        </Box>
      </div>

      <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
        <Box>
          Friends
        </Box>

        <Box>
        Communities 
        </Box>
      </div>

    </MainGrid>
  )
}
