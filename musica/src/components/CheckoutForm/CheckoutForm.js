import React from 'react';
import { Formik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import MyField from '../MyField/MyField';
import Button from '../Button/Button';
import LocalStorage from '../../localStorage';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { removeCart } from '../../store/Cart/actions';

const PHONE_REGEX = /^((\+38))?([ ])?((\(\d{3}\))|(\d{3}))?([ ])?(\d{3}[- ]?\d{2}[- ]?\d{2})$/;

const schema = yup.object().shape({
    firstName: yup.string()
        .min(2, 'Too short')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    age: yup.number()
        .positive('Enter a positive number')
        .integer('Enter an integer')
        .required('Required'),
    address: yup.string()
        .required('Required'),
    mobile: yup.string()
        .matches(PHONE_REGEX, 'Invalid phone number')
        .required('Required')
})

const CheckoutForm = (props) => {
    const { itemsInCart, clearCart, history } = props;

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        clearCart(itemsInCart);
        console.log('Contact details', values);
        setSubmitting(false);
        resetForm();
        history.push('/');
    }

    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: '',
                    address: '',
                    mobile: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
            {({ isSubmitting }) => {
                return (
                    !!itemsInCart.length &&
                    <div className='cart-page__checkout'>
                        <h2 className='cart-page__title' id='checkout-info'>Contact information</h2>
                        <Form className='cart-page__checkout-form checkout-form' noValidate={true}>
                            <div className='checkout-form__fields form-fields'>
                                <Field component={MyField} type='text' label='Name*' name='firstName' placeholder='Your name' />
                                <Field component={MyField} type='text' label='Surname*' name='lastName' placeholder='Your surname' />
                                <Field component={MyField} type='number' label='Age' name='age' placeholder='Enter your age' min='1' />
                                <Field component={MyField} type='text' label='Address' name='address' placeholder='Leave your comment...' rows='4' fieldType='textarea' />
                                <Field component={MyField} type='text' label='Phone Number*' name='mobile' placeholder='+38' />
                            </div>
                            <div className='cart-page__controls'>
                                <Button type='submit' disabled={isSubmitting} className='cart-page__btn checkout-btn'>Checkout</Button>
                            </div>
                        </Form>
                    </div>
                )
            }}
            </Formik>
        </>
    )
}

const mapStateToProps = ({cart}) => ({itemsInCart: cart});

const mapDispatchToProps = (dispatch) => ({
    clearCart: (items) => {
        console.log('Purchased goods', items);
        LocalStorage.clearCart();
        dispatch(removeCart());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckoutForm));