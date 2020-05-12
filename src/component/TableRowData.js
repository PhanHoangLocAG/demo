import React, { Component } from 'react';
class TableRowData extends Component {

    editPermission=()=>{
        if(this.props.permission===1){return "Admin";}
        if(this.props.permission===2){return "Moderator";}
        else
        {return "normal";}
    }

    render() {
        
        return (
            <tr>
                    <td >{this.props.stt +1}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.editPermission()}</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua">
                        <i className="fas fa-edit" /> sữa
                        </div>
                        <div className="btn btn-danger xoa">
                        <i className="fas fa-trash-alt" /> xóa
                        </div>
                    </div>
                    </td>
                </tr>
        );
    }
}

export default TableRowData;