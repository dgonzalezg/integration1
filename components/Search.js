
import Router from 'next/router'
import fetch from 'isomorphic-unfetch';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', results: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    this.setState({value: event.target.value});
     Router.push('/search/[query]', `/search/${this.state.value}`)
  

    event.preventDefault();
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
