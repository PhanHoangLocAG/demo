import React, { Component } from 'react';

class AddUser extends Component {

    valueName=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });
    }

    hienDiv=()=>{
        if(this.props.trangThai===true)
        {
            return(
                <div className="col-md-3 col-12">
                    <div className="card text-left w-100">
                        <div className="card text-white bg-primary">
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                            <label >Tên user</label>
                            <input type="text" name="name"
                            onChange={(event)=>this.valueName(event)}
                            className="form-control"  aria-describedby="helpId" placeholder="userName" />
                            </div>
                            <div className="form-group">
                            <label >Điện thoại</label>
                            <input type="text" name="tel"
                            onChange={(event)=>this.valueName(event)}
                            className="form-control"  aria-describedby="helpId" placeholder="số" />
                            </div>
                            <div className="form-group">
                            <label >Quyền</label>
                            <select name="permission"
                            onChange={(event)=>this.valueName(event)}
                            className="form-control" >
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <button type="reset"
                            onClick={(name,tel,permission)=>this.props.addUser(
                                this.state.name,this.state.tel,this.state.permission
                            )}
                            className="btn btn-block btn-success">
                                Thêm mới
                            </button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return null;
    }

    

    render() {
        return (
                this.hienDiv()
        );
    }
}

export default AddUser;