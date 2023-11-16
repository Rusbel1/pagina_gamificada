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

        axiosController.post('/usuariosPost', formData, headers)
            .then(response => {
                console.log('Registro exitoso', response.data);
                onlogin()
            })
            .catch(error => {
                console.error('Error en el registro', error);
            });
    };

    return (
        <Container size={420} my={40}>
            <div style={{ backgroundImage: `url(${background})`, width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundSize: 'cover' }}></div>
            <Title ta="center">
                Registro
            </Title>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput name='first_name' label="Primer nombre" placeholder="First Name" required onChange={handleInputChange} />
                <TextInput name='second_name' label="Segundo nombre" placeholder="Second Name" onChange={handleInputChange} />
                <TextInput name='first_lastname' label="Primer apellido" placeholder="Last Name" required onChange={handleInputChange} />
                <TextInput name='second_lastname' label="Segundo apellido" placeholder="Second Last Name" onChange={handleInputChange} />
                <TextInput name='mail' label="Correo electronico" placeholder="you@mantine.dev" required onChange={handleInputChange} />
                <PasswordInput name='password' label="Contraseña" placeholder="Your password" required mt="md" onChange={handleInputChange} />
                <PasswordInput name='confirmpassword' label="Confirmar contraseña" placeholder="Confirm password" required mt="md" onChange={handleInputChange} />
                <Button fullWidth mt="md" style={{backgroundColor:'darkslategray'}} onClick={handleRegister} >
                    Registrarse
                </Button>
            </Paper>

        </Container>
    );
}