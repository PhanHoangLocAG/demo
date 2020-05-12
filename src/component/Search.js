import React, { Component } from 'react';

class Search extends Component {

    hienButton=()=>{
        if(this.props.trangThai===true)
            return(
                <button className="ml-2 btn  btn-outline-success" onClick={()=>this.props.doiTrangThai()}>Click an</button>
            );
        else
                return(
                    <button className="ml-2 btn  btn-outline-success" onClick={()=>this.props.doiTrangThai()}>Click hien thi</button>
                );
    }


    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input 
                        type="text" className="form-control" 
                        style={{width: '400px'}}  aria-describedby="helpId" placeholder="Nhập từ khóa"
                        onChange={(event)=>this.props.isChange(event.target.value)}
                        />
                        <div className="btn btn-info"
                        onClick={(event)=>this.props.searchText}
                        >Tìm</div>
                    </div>
                </div>
                {this.hienButton()}
                <hr/>
            </div>
        );
    }
}

export default Search;