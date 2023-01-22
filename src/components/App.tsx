import React from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Profile } from './Profile';

interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService();
  
  constructor(props: any) {
    super(props)

    this.state = {
      user: undefined
    }

    this.setUser = this.setUser.bind(this)
  }

  private setUser(user: User){
    this.setState({
      user: user
    })
    console.log('Setting the user! ' + user)
  }

  render() {
    return (
      <div className='wrapper'>
        <BrowserRouter>
            <Navbar user={this.state.user} />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login authService={this.authService} setUser={this.setUser} />} />
              <Route path='/profile' element={<Profile />}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
