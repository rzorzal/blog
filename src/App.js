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

  constructor(props) {
    super(props);

    this.selectIssue = this.selectIssue.bind(this);
    this.onSelectedIssue = this.onSelectedIssue.bind(this);
  }

  componentDidMount() {
    Promise.all([
      GitHubValues.getUser(),
      GitHubValues.getIssues()
    ]).then(async ([user, issues]) => {
      this.setState({
        user,
        issues,
        selectedIssue: issues[0]
      });
    });
  }

  async selectIssue(issueNumber) {
    const issueSelected = await GitHubValues.getSingleIssue(issueNumber);
    this.setState({ selectedIssue: issueSelected });
  }

  async onSelectedIssue(issue) {
    this.selectedIssue(issue.number);
  }

  render() {
    return (
      <div >
        <GitHubContext.Provider value={this.state}>
          <Container fluid className="Root">
            <Row>
              <Col className="RemovePadding" xs="12" md="3" lg="3">
                <Menu onSelectedIssue={this.onSelectedIssue} ></Menu>
              </Col>
              <Col xs="12" md="9" lg="9">
                <Content></Content>
              </Col>
            </Row>
          </Container>
        </GitHubContext.Provider>
      </div>
    );
  }
}

export default App;
