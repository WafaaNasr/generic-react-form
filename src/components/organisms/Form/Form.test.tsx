import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'mutationobserver-shim';

import Form from './Form.component';
import { formData, ISignInFormFields } from './Form.data';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../../styles/themes/theme';
import CssReset from '../../../styles/CssReset';
import { FormProps } from './Form.types';

//TODO: Move to TestWrapper
const TestWrapperWithoutInitial = () => (
    <ThemeProvider theme={new darkTheme()}>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap"
            rel="stylesheet"
        ></link>
        <CssReset />
        <Form<ISignInFormFields> {...formData} />
    </ThemeProvider>
);

const onSubmit = jest.fn();

const formDataWithDef: FormProps<ISignInFormFields> = {
    ...formData,
    formDefaultValues: { username: 'name', password: 'password' },
    onSubmitCb: onSubmit,
};
const TestWrapperWithInitial = () => (
    <ThemeProvider theme={new darkTheme()}>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,200&display=swap"
            rel="stylesheet"
        ></link>
        <CssReset />
        <Form<ISignInFormFields> {...formDataWithDef} />
    </ThemeProvider>
);

describe('Form', () => {
    test('should display a sign in form', async () => {
        const { findByTestId } = render(<TestWrapperWithoutInitial></TestWrapperWithoutInitial>);

        const signinForm = await findByTestId('form');
        expect(signinForm).toHaveFormValues({
            username: '',
            password: '',
        });
    });

    test('should submit form ', async () => {
        const { findByTestId } = render(<TestWrapperWithInitial></TestWrapperWithInitial>);
        const submitBtn = await findByTestId('submit-btn');

        fireEvent.submit(submitBtn);
        const signinForm = await findByTestId('form');

        expect(signinForm).toHaveFormValues({
            username: 'name',
            password: 'password',
        });
    });
});
