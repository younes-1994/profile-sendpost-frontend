import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';


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

        <TextField placeholder="Name" />
      </div>
    );
  }
}
const styles = (theme) => ({
  container: {
    textAlign: "right"
  }
});
export default withStyles(styles)(App);