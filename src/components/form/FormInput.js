import React, { Fragment, useState } from 'react';

export default function FormInput({ validations, ...props }) {

    let [message, setMessage] = useState('');
    let valid = false;
    let errorMessage = '';
    const onChangeInput = (event) => {
        let { value } = event.target;

        for (let key in validations) {
            let validValue = validations[key];
            switch (key) {
                case 'required':
                    if (!value || value.length === 0) {
                        errorMessage = ` ${props.label} chưa được nhập!`;
                    }
                    break;
                case 'email':
                    let regEmail = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
                    if (!value || !regEmail.test(value)) {
                        errorMessage = `Email không đúng định dạng!`;
                    }
                    break;
                case 'number':
                    let regNumber = new RegExp("^[0-9]*$");
                    if (!value || !regNumber.test(value)) {
                        errorMessage = `Vui lòng nhập số!`;
                    }
                    break;
                case 'min':
                    if (!value || value.length < validValue) {
                        errorMessage = `${props.label} ít nhất ${validValue} ký tự!`;
                    }
                    break;
                case 'max':
                    if (!value || value.length < validValue) {
                        errorMessage = `${props.label} tối đa ${validValue} ký tự!`;
                    }
                    break;
                default:
                    errorMessage = '';
                    break;
            }

            setMessage(errorMessage);
            if (errorMessage.length !== 0) break;
        }

        valid = errorMessage.length > 0 ? true : false;

        if (props.onChange)
            props.onChange(event, valid);
    }

    return (
        <Fragment>
            <input {...props} onChange={(event) => onChangeInput(event)} />
            <small style={{ color: 'red' }}>{message}</small>
        </Fragment>
    )
}
