import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import Button from '../Button/Button';

let testProps = {};
const confirmMock = jest.fn(() => console.log('Clicked on OK button'));

beforeEach(() => {
     testProps = {
         header: 'TestModal',
         closeButton: true,
         text: 'Test info',
         actions: [
            <Button key='1' onClick={confirmMock}>TestOk</Button>,
            <Button key='2' onClick={testProps.closeModal}>TestCancel</Button>],
         closeModal: jest.fn()
    }
});

describe('Testing Modal.js', () => {
    test('Smoke test for Modal.js', () => {
        const { container } = render(<Modal />);
        console.log(container.innerHTML);
    });

    test('Correct rendering of passed props', () => {
        const { container, getByText, getByTestId } = render(<Modal {...testProps} />);

        getByText(testProps.header);
        getByText(testProps.text);
        expect(container).toContainElement(getByTestId('btn-close-icon'));
        expect(getByText('TestOk')).toBeInTheDocument();
        expect(getByText('TestCancel')).toBeInTheDocument();
        expect(container.querySelector('.modal-footer').children.length).toBe(2);
    });

    test('Testing default props', () => {
        const { container, getByText, queryByTestId } = render(<Modal />);
        getByText(/information/i);
        getByText(/confirm your action/i);
        expect(queryByTestId('btn-close-icon')).not.toBeInTheDocument();
        expect(container.querySelector('.modal-footer')).toBeEmpty();
    });

    test('Click on the area outside the modal calls the passing function', () => {
        const { container } = render(<Modal closeModal={testProps.closeModal} />);

        fireEvent.click(container.firstElementChild);
        expect(testProps.closeModal).toHaveBeenCalledTimes(1);
    });

    test('Click on the close icon calls the passing function', () => {
        const { getByTestId } = render(<Modal closeButton={testProps.closeButton} closeModal={testProps.closeModal} />);

        fireEvent.click(getByTestId('btn-close-icon'));
        expect(testProps.closeModal).toHaveBeenCalledTimes(1);
    });

    test('Click on the action buttons calls the passing functions', () => {
        const { getByText } = render(<Modal {...testProps} />);

        const okBtn = getByText(testProps.actions[0].props.children);
        const cancelBtn = getByText(testProps.actions[1].props.children);

        expect(testProps.closeModal).not.toHaveBeenCalled();
        fireEvent.click(okBtn);
        fireEvent.click(cancelBtn);
        expect(confirmMock).toHaveBeenCalled();
        expect(testProps.closeModal).toHaveBeenCalled();
    });
});