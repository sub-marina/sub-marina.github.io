import React from 'react';

const MyField = (props) => {
    const { field, form, label, fieldType, ...rest } = props;
    const { name } = field;

    return (
        <>
            <div className='form-field'>
                <label>{label}
                    {!fieldType && <input {...field} {...rest} />}
                    {fieldType && <textarea {...field} {...rest} />}
                </label>
                {form.touched[name] && form.errors[name] && <div className='error-msg'>{form.errors[name]}</div>}
            </div>
        </>
    )
}

export default MyField;