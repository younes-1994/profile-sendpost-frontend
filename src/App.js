import React from 'react';
import { withStyles } from '@material-ui/styles';

import Header from './components/Header';
import Content from './components/Content';
import Media from './components/Media';
import Footer from './components/Footer';

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
    textAlign: "right",
    padding: '16px 12px'
  }
});
export default withStyles(styles)(App);