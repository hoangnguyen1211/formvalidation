import React, { Component } from 'react';

export default class SignUp extends Component {
    
    constructor(props) {
   
        super(props);
        console.log(this.props)
        for (let propsName in props.object) {
            this.state = {
                values: { ...this.state.values, [propsName]: '' },
                errors: { ...this.state.errors, [propsName]: '' }
            }
        }
        console.log(this.state);
    }
    state = {
        user: { email: '' },
        errors: { email: '' }
    }

    onChangeInput = (event) => {
        const { name, value, type } = event.target;
        let user = {
            user: { ...this.state.user, [name]: value }
        }
        let errorsMessage = '';
        if (type == 'email') {
            if (value === '') {
                errorsMessage += name + ' is required !';
            }

        }
        let errors = { ...this.state.errors, [name]: errorsMessage }

        this.setState({
            user: user,
            errors: errors
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/signin')
    }
    render() {
        // for (let key in this.state.values) {
        //     console.log(language[key]['vi'])
        // }

        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-4 m-auto border rounded pt-3 pb-4">
                        <h3 className="text-center">ĐĂNG KÝ</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.onChangeInput}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={this.state.values.email}
                                    onChange={this.onChangeInput}
                                    className="form-control"
                                />
                                <span className="text-danger">{this.state.errors.email}</span>
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangeInput}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Nhập lại mật khẩu</label>
                                <input
                                    type="password"
                                    name="confirm"
                                    value={this.state.confirm}
                                    onChange={this.onChangeInput}
                                    className="form-control"
                                />
                            </div>
                            <button
                                type="submit "
                                className="btn btn-success mt-2 w-100">
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
