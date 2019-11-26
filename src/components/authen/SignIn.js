import React, { Component } from 'react';
import FormInput from '../form/FormInput';

export default class SignIn extends Component {

    state = {
        user: {},
        arrValid: ['email', 'password', 'phone']
    }

    onChangeHandle = (event, valid) => {
        let { name, value } = event.target;
        let { arrValid } = this.state;
        
        arrValid = valid ? [...new Set([...arrValid, name])] : arrValid.filter(x => x !== name);

        this.setState({
            user: { ...this.state.user, [name]: value },
            arrValid
        }, () =>  console.log(this.state.arrValid))
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        
        // this.props.history.push('/signup')
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-4 m-auto border rounded pt-3 pb-4">
                        <h3 className="text-center">ĐĂNG NHẬP</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <FormInput
                                    type="text"
                                    label="Email"
                                    name="email"
                                    className="form-control"
                                    onChange={this.onChangeHandle}
                                    validations={{ required: true, email: true, min: 6 }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <FormInput
                                    type="password"
                                    label="Mật khẩu"
                                    name="password"
                                    className="form-control"
                                    onChange={this.onChangeHandle}
                                    validations={{ required: true, min: 6 }}
                                />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <FormInput
                                    type="text"
                                    label="Số điện thoại"
                                    name="phone"
                                    className="form-control"
                                    onChange={this.onChangeHandle}
                                    validations={{ required: true, number: true, min: 10, phone: true }}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={this.state.arrValid.length !== 0}
                                className="btn btn-success mt-2 w-100">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
