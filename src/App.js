import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Button } from "antd";

import Header from './components/Header';
import Content from './components/Content';
import Media from './components/Media';
import Footer from './components/Footer';

import './App.scss';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <Button type="primary" style={{ marginLeft: 8 }} className="test">
          Primary Button
    </Button>
        <Content />
        <Media />
        <Footer />
      </div>
    );
  }
}
const styles = (theme) => ({
  container: {
    position: 'relative',
    width: '100%',
    margin: 'auto',
    textAlign: "right",
    padding: '16px 12px',
    '@media(min-width:768px)': {
      width: '70%',
    }
  }
});
export default withStyles(styles)(App);