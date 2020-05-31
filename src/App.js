import React from 'react';
import { Container, Image,Divider,Header, Grid,Label,Icon,Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div>


    <Container >
     <Grid columns={1} centered>
       <Grid.Row>
         <Grid.Column>
         <Image src="myAvatar.png" centered size='small' circular  bordered />
         </Grid.Column>
       </Grid.Row>

       <Grid.Row >
         <Grid.Column >
         <Header size='large' textAlign='center'>Nkosana Khoza</Header>
         <Container textAlign='center' >
            Computer Science & Informatics Graduate
         </Container>
         </Grid.Column>
       </Grid.Row>

       <Divider />

       <Grid.Row>
         <Grid.Column >
          <Container textAlign='center'>
          <Label horizontal textAlign='center'>
            <Icon  name='mail' /> nkosanakhoza2@gmail.com
          </Label>
          <Label>
            <Icon name='phone' /> +27 67 664 7514
          </Label>
          </Container>
         </Grid.Column>
       </Grid.Row>

     </Grid>
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
      <Header size='large'>Profile</Header>

      <Divider hidden />

      <p>
      
      I Am A Passionate Graduate in The Field Of Computer Science Informatics. 
      I Am A Huge loT Enthusiast And Hobbyist Driven By The Unshakable Urge To Design And Build Quality Software For Clients, 
      While Satisfying And Completely Meeting Business Requirements. 
      
      I Base All My Designs And Projects From A Minimalistic, Smooth And Enjoyable User Experience.
      
      </p>
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
      <Header size='large'>Education</Header>

      <p><b>Bsc in Information Technology in Computer Science & Informatics, University Of Johannesburg, Johannesburg </b></p>
      <p>February 2017 - November 2020</p>
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
      <Header size='large'>Skills</Header>

   
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column>
        <Progress percent={95} size='small' color='black' label='Java'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={85} size='small' color='black' label='Python'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={85} size='small'  color='black'label='C++'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={90} size='small' color='black' label='C#'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={74} size='small' color='black' label='React Native'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={55} size='small' color='black' label='React'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={80} size='small' color='black' label='ASP.NET MVC'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={85} size='small' color='black' label='Xamarin.Android'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={80} size='small' color='black' label='SQL Database'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={45} size='small' color='black' label='IoT'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={68} size='small' color='black' label='Electronics'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={55} size='small' color='black' label='Microsoft Azure'  />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <Progress percent={40} size='small' color='black'  label='Unity Game Development'  />
        </Grid.Column>

        <Grid.Column>
        <Progress percent={60} size='small' color='black' label='Basic Penetration Testing'  />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    
    </Container>

    <Divider hidden />

    <Container textAlign='left' >
      <Header size='large'>Hobbies</Header>
      <p>Drawing, Disassembly Of Old Electronics For Spare Parts In My Projects :), I Flash And Test Custom Roms, Gaming,COD Player, PUBG Player :)</p>
      <p>Away From My Screen Im An Actual Human Being With Family And Friends :) </p>
    </Container>

    <Divider hidden />

    <Container textAlign='left'>
    <Header size='large'>Languages</Header>
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column>
        <Progress percent={98} size='small' color='black' label='English'  />
        </Grid.Column>

        <Grid.Column> 
        <Progress percent={99} size='small'  color='black'label='IsiZulu'  />
        </Grid.Column>
      </Grid.Row>
      </Grid>
    </Container>


    </div>
  );
}

export default App;
