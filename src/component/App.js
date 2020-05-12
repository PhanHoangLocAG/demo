import React,{Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUsers from './DataUsers';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  isChange=(e)=>{
    console.log(e.target.value);
  }

  constructor(props) {
    super(props);
      this.state={
        trangThai:true,
        Data:DataUsers,
        searchText:''
      }
  }

  isChange=(event)=>{
    this.setState(
      {
        searchText:event
      }
    )
  }



  doiTrangThai=()=>{
    this.setState(
      {
        trangThai:!this.state.trangThai
      }
    );
  }

  addUser=(name,tel,permission)=>{
    let item={};
    item.id=uuidv4();
    item.name=name;
    item.tel=tel;
    item.permission=parseInt(permission);
    let items =this.state.Data;
    items.push(item);
    this.setState({
      Data:items
    })
}


  render() {
    
    var ketQua=[];
    this.state.Data.forEach(e => {
      if(e.name.indexOf(this.state.searchText)!== -1)
      {
        ketQua.push(e);
      }
    });




    return (
      
      <div>
        <Header/>
        <div className="searchForm">
            <div className="container">
                  <div className="row">
                    <Search
                      doiTrangThai={()=>this.doiTrangThai()}
                      trangThai={this.state.trangThai}
                      isChange={(e)=>this.isChange(e)}
                      searchText={this.state.searchText}
                    />
                    <TableData
                      Data={ketQua}
                    />
                    <AddUser
                    trangThai={this.state.trangThai}
                    addUser={(name,tel,permission)=>this.addUser(name,tel,permission)}
                    />
                  </div>
            </div>
        </div>
      </div>
    );
  }
}



export default App;
