import React from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
import { Router, Switch, Route} from 'react-router-dom';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Profile } from './Profile';
import history from '../utils/history';
import { Spaces } from './spaces/Spaces';
import { DataService } from '../services/DataService';
import { CreateSpace } from './spaces/CreateSpaces';

interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService();
  private dataService: DataService = new DataService();

  constructor(props: any) {
    super(props)

    this.state = {
      user: undefined
    }

    this.setUser = this.setUser.bind(this)
  }

  private async setUser(user: User) {
    this.setState({
      user: user
    })
    await this.authService.getAWSTemporaryCreds(user.cognitoUser);
  }

  render() {
    return (
      <div className='wrapper'>
        <Router history={history}>
          <div>
            <Navbar user={this.state.user}/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login'>
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>
              <Route exact path='/profile'>
                <Profile authService={this.authService} user={this.state.user} />
              </Route>
              <Route exact path='/spaces'>
                <Spaces dataService={this.dataService}/>
              </Route>
              <Route exact path='/createSpace'>
                <CreateSpace dataService={this.dataService}/>
              </Route>
            </Switch>
          </div>

        </Router>
      </div>
    )
  }
}
