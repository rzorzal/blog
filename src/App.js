import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import Menu from './components/Menu';
import Content from './components/Content';

import GitHubValues from './contexts/values/github';
import GitHubContext from './contexts/github';



class App extends React.Component {

  state = {
    user: undefined,
    issues: [],
    selectedIssue: undefined
  }

  componentDidMount() {
    Promise.all([
      GitHubValues.getUser(),
      GitHubValues.getIssues()
    ]).then(([user, issues]) => {
      this.setState({ user, issues, selectedIssue: issues[0] });
    });
  }

  render() {
    return (
      <div >
        <GitHubContext.Provider value={this.state}>
          <Container fluid className="Root">
            <Row>
              <Col xs="12" md="9" lg="9">
                <Content></Content>
              </Col>
              <Col className="RemovePaddingRigth" xs="12" md="3" lg="3">
                <Menu></Menu>
              </Col>
            </Row>
          </Container>
        </GitHubContext.Provider>
      </div>
    );
  }
}

export default App;
