import React, {Component} from 'react';
import SignOut from './components/signOut/signOut';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Input from './components/Input/Input';
import FaceRecogonition from './components/FaceRecogonition/FaceRecogonition';
import './App.css';
import ParticlesBg from 'particles-bg';
import Clarifai from'clarifai';

const app = new Clarifai.App({
 apiKey: '9e1caaae5ea64ac985861c67e4080404'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '' ,
      imageUrl: '' ,
      box: {} ,
      route: 'signin' ,
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmitButton = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  }

  onRouteChange= (route) => {
    if (route === 'signout') 
      this.setState({isSignedIn: false})
    else if (route === 'home')
      this.setState({isSignedIn: true})
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box} = this.state;
    return (
    <div className='App'>
      <ParticlesBg type='cobweb' bg={true} color='#ffffff'/>
      <SignOut isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} /> 
      { route === 'home' 
        ? <div>
            <Logo /> 
            <Rank />
            <Input onInputChange={this.onInputChange} onSubmitButton={this.onSubmitButton}/>
            <FaceRecogonition imageUrl={imageUrl} box={box} /> 
          </div>
          : (
            route === 'signin' ?
            <SignIn onRouteChange ={this.onRouteChange} /> 
            : <Register onRouteChange ={this.onRouteChange} />
          )
            }
    </div>
  );
 }
}

export default App;
