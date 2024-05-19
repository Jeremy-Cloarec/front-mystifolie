import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(
            <PasswordInput
                testID="password-input"
                password="testPassword"
                onChangePassword={() => { }}
                showPassword={false}
                toggleShowPassword={() => { }}
                error=""
            />
        );
        expect(getByTestId('password-input')).toBeTruthy();
    });

    it('renders the correct label text', () => {
        const { getByText } = render(
            <PasswordInput
                password="testPassword"
                onChangePassword={() => { }}
                showPassword={false}
                toggleShowPassword={() => { }}
                error=""
            />
        );
        expect(getByText('Votre mot de passe')).toBeTruthy();
    });

    it('renders the correct placeholder text', () => {
        const { getByPlaceholderText } = render(
            <PasswordInput
                password="testPassword"
                onChangePassword={() => { }}
                showPassword={false}
                toggleShowPassword={() => { }}
                error=""
            />
        );
        expect(getByPlaceholderText('Entrez votre mot de passe')).toBeTruthy();
    });

    it('passes the correct value prop to the InputText component', () => {
        const { getByTestId } = render(
            <PasswordInput
                password="testPassword"
                onChangePassword={() => { }}
                showPassword={false}
                toggleShowPassword={() => { }}
                error=""
            />
        );
        expect(getByTestId('password-input').props.value).toBe('testPassword');
    });

    it('passes the correct onChangeText prop to the InputText component', () => {
        const onChangePasswordMock = jest.fn();
        const { getByTestId } = render(
            <PasswordInput

                password="testPassword"
                onChangePassword={onChangePasswordMock}
                showPassword={false}
                toggleShowPassword={() => { }}
                error=""
            />
        );
        fireEvent.changeText(getByTestId('password-input'), 'newPassword');
        expect(onChangePasswordMock).toHaveBeenCalledWith('newPassword');
    });

    it('passes the correct secureTextEntry prop to the InputText component', () => {
        const { getByTestId } = render(
            <PasswordInput
                password="testPassword"
                onChangePassword={() => { }}
                showPassword={false}
                toggleShowPassword={() => { }}
                error=""
            />
        );
        expect(getByTestId('password-input').props.secureTextEntry).toBe(true);
    });

    it('passes the correct onToggleSecureTextEntry prop to the InputText component', () => {
        const toggleShowPasswordMock = jest.fn();
        const { getByTestId } = render(
            <PasswordInput
                password="testPassword"
                onChangePassword={() => { }}
                showPassword={false}
                toggleShowPassword={toggleShowPasswordMock}
                error=""
            />
        );
        
        const testID = 'input-text-toggle-secure-text'; 
        const icon = getByTestId(testID);
        fireEvent.press(icon);
        expect(toggleShowPasswordMock).toHaveBeenCalled();
    });

    it('renders the error message when provided', () => {
        const { getByText } = render(
            <PasswordInput
                password="testPassword"
                onChangePassword={() => { }}
                showPassword={false}
                toggleShowPassword={() => { }}
                error="Invalid password"
            />
        );
        expect(getByText('Invalid password')).toBeTruthy();
    });
});