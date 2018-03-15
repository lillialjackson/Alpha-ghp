import React from 'react';
import ReactTable from 'react-table';


class PartnerSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      experiencelevel: {},
      location: '',
      matchedUserTable: [{
        username: '',
        email: ''
      }]
    };
  }

// input field change
  onExperienceLevelChange = (event) => {
    return this.setState({experiencelevel: event.target.value});

  }

  onLocationChange = (event) => {
    return this.setState({location: event.target.value.toLowerCase().trim()});
  }


// update state of search data returned
  partnerSearchResultData = (results) => {
      const newMatchedUserData = results.map(result => {
          return {
              username: result.username,
              email: result.email
          }
      });

      this.setState({
          matchedUserTable: newMatchedUserData
      });
  }


// search get fetch
  onSearch = () => {
    fetch(`https://damp-forest-34333.herokuapp.com/search?experiencelevel=${this.state.experiencelevel}&location=${this.state.location}`)
    .then(response => response.json())
    .then( response => {
      this.partnerSearchResultData(response);
    })
    .catch(err => {
      return alert('Could not find climbers in your area at this time');
    })
  }



  render() {

  // Table Data Const
    const matchedUserTable = this.state.matchedUserTable;

    const searchColumns = [
      {
        Header: 'Username',
        accessor: 'username'
      }, {
        Header: 'Email',
        accessor: 'email'
   }]


  return (
    <div>
        <div className = 'form'>
            <h1> Find a Partner! </h1>
              <div id = 'search'>
                <label htmlFor="location"> Location: </label>
                <input type="text"
                   name="location"
                  onChange= {this.onLocationChange}
                  required /><br />
                <label htmlFor="experience"> Experience Level: </label>
                <select
                  onChange = {this.onExperienceLevelChange}>
                  <option value="none">--</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="elite">Elite</option>
                </select> <br />
                <button className= 'modalButton'
                  onClick ={this.onSearch}>
                   Find a Partner!
                 </button> <br />
                </div>
              <ReactTable data={matchedUserTable} columns={searchColumns} defaultPageSize = {5} />

              </div>




    </div>
  )}
}

export default PartnerSearch;
