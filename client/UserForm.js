import React, {Component} from 'react';
import styles from './UserForm.css';
import cloud1 from './cloud1.png';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUserSubmit(this.state.name);
  }

  handleChange(e) {
    this.setState({ name : e.target.value });
  }

  render() {
    return(
      <div>
        <div className={styles.WelcomeBox}>
          <h1 className={styles.UserWelcome}>Welcome to our CHAT!</h1>
          <img className={styles.Image} src={cloud1} alt={"cloud"} />
        </div>
        <form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
          <input
            className={styles.UserInput}
            placeholder='Write your nickname and press enter'
            onChange={e => this.handleChange(e)}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

export default UserForm;

