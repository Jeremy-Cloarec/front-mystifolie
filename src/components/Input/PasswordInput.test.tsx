import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(
            <PasswordInput
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