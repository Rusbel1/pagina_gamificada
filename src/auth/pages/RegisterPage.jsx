import axios from 'axios';
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
    Modal
} from '@mantine/core';
import background from '../../assets/back_color.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosController } from '../../helper/axiosController';


export function RegisterPage() {

    const navigate = useNavigate();
    const onlogin = () => {
        alert('Registro exitoso')
        setTimeout(() => {
            
            return navigate('/auth/login')
        }, 2000);
    }
    const [formData, setFormData] = useState({
        first_name: '',
        second_name: '',
        first_lastname: '',
        second_lastname: '',
        mail: '',
        password: '',
        confirmPassword: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleRegister = () => {
        const token = localStorage.getItem('token');
        const headers = {
            headers: {
                token: token
            }
        };

        // Aquí debes realizar la solicitud HTTP utilizando Axios para enviar los datos al backend
        axiosController.post('/usuariosPost', formData, headers)
            .then(response => {
                // Maneja la respuesta del backend aquí (éxito o error)
               
                console.log('Registro exitoso', response.data);
                onlogin()
                // Puedes redirigir al usuario a la página de inicio de sesión o mostrar un mensaje de confirmación
            })
            .catch(error => {
                // Maneja los errores aquí y muestra un mensaje de error al usuario
                console.error('Error en el registro', error);
            });
    };

    return (
        <Container size={420} my={40}>
            <div style={{ backgroundImage: `url(${background})`, width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundSize: 'cover' }}></div>
            <Title ta="center">
                Register
            </Title>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput name='first_name' label="First Name" placeholder="First Name" required onChange={handleInputChange} />
                <TextInput name='second_name' label="Second Name" placeholder="Second Name" onChange={handleInputChange} />
                <TextInput name='first_lastname' label="Last Name" placeholder="Last Name" required onChange={handleInputChange} />
                <TextInput name='second_lastname' label="Second Last Name" placeholder="Second Last Name" onChange={handleInputChange} />
                <TextInput name='mail' label="Email" placeholder="you@mantine.dev" required onChange={handleInputChange} />
                <PasswordInput name='password' label="Password" placeholder="Your password" required mt="md" onChange={handleInputChange} />
                <PasswordInput name='confirmpassword' label="Confirm Password" placeholder="Confirm password" required mt="md" onChange={handleInputChange} />
                <Button fullWidth mt="xl" onClick={handleRegister} >
                    Sign in
                </Button>
            </Paper>

        </Container>
    );
}