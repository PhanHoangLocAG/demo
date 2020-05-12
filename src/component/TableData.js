import React, { Component } from 'react';
import TableRowData from './TableRowData';


class TableData extends Component {

    mappingDataUser = () => this.props.Data.map((value,key) => (

        <TableRowData
            key={key}
            stt={key}
            name={value.name}
            tel={value.tel}
            permission={value.permission}
        />
    ));

    render() {
        


        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;