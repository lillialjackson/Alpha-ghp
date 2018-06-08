import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";


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
            <h4> Find a Partner! </h4>
              <div id = 'search'>
                <div className='registerLabel'>
                  <label htmlFor="location"> Location: </label>
                </div>
                <div className= 'inputField'>
                  <input type="text"
                     name="location"
                    onChange= {this.onLocationChange}
                    required />
                </div>
                  <br />
                <div className='registerLabel'>
                  <label htmlFor="experience"> Experience Level: </label>
                </div>
                <div className= 'inputField'>
                  <select
                    onChange = {this.onExperienceLevelChange}>
                    <option value="none">--</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="elite">Elite</option>
                  </select>
                </div>
                  <br />
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
