import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';

import background from '../../assets/back_color.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



export function LoginPage() {
    const [formData, setFormData] = useState({
        mail: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const navigate = useNavigate();

    const handleRegister = () => {
        console.log(formData)
        axios.post('http://localhost:4000/login', formData)
            .then(response => {
                console.log('Ingreso exitoso', response.data);
                localStorage.setItem('token', response.data.token)
                window.location.href = '/'; 
            })
            .catch(error => {
                console.error('Error en el registro', error);
            });
    };

    return (
            <Container size={420} my={40} style={{ padding: 15, marginBottom: 10, marginTop: 10 ,}}>
                <div style={{ backgroundImage: `url(${background})`,width:'100%',height:'100vh',position:'absolute',top:0,left:0, zIndex:-1,backgroundSize: 'cover' }}></div>
                <Title ta="center" color='darkslategray'>
                    Welcome back!

                </Title>
                <Text size="sm" ta="center" mt={5} color='darkslategray'>
                    Inicia sesion con tu cuenta
                </Text>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput name='mail' label="Correo electronido"  placeholder="you@mantine.dev" required onChange={handleInputChange}/>
                    <PasswordInput  name='password' label="Contraseña" placeholder="Your password" required mt="md" onChange={handleInputChange}/>
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Recuerdame" />
                        <Text c="dimmed" size="sm" ta="center" mt={5}>
                           No tienes una cuenta todavia? {''}
                            <Link to="/auth/register">
                            <Anchor size="sm" component="button" style={{color:'darkslategray'}}>
                                Crear una cuenta
                            </Anchor>
                            </Link>
                        </Text>
                    </Group>
                    <Button fullWidth mt="xl" onClick={handleRegister} style={{backgroundColor:'darkslategray'}}>
                        Iniciar sesion
                    </Button>
                </Paper>
        </Container>
    );
}