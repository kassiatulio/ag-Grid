import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      columnDefs: [{
        headerName: "ID", field: "id", filter: true
      }, {
        headerName: "Nome", field: "first_name", filter: true
      }, {
        headerName: "Apelido", field: "last_name", filter: true
      }, {
        headerName: "Gênero", field: "gender", filter: true  
      }],
    }
  }

  componentDidMount() {
    axios.get('https://gorest.co.in/public-api/users', { headers: { 'Authorization': 'Bearer SGu_9ggmXj5K0cH1UwN-rK0eA6cI_hWrzjZ2' } })
      .then(response => {
        this.setState({ rowData: response.data.result })
      })
    }

  render() {
    return (
      <div>
        <h1>Usuários</h1>
        <div 
          className="ag-grid ag-theme-balham"
          style={{ 
          height: '500px', 
          width: '100%' }} 
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>      
        </div>
      </div>
    );
  }
}

export default App;
