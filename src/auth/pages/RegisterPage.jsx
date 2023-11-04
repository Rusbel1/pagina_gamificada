
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button
} from '@mantine/core';
import background from '../../assets/back_color.png'


export function RegisterPage() {
    return (
        <Container size={420} my={40}>
            <div style={{ backgroundImage: `url(${background})`,width:'100%',height:'100vh',position:'absolute',top:0,left:0, zIndex:-1,backgroundSize: 'cover' }}></div>
            <Title ta="center">
                Register
            </Title>
            
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput label="First Name" placeholder="First Name" required />
                        <TextInput label="Second Name" placeholder="Second Name" />
                        <TextInput label="Last Name" placeholder="Last Name" required />
                        <TextInput label="Second Last Name" placeholder="Second Last Name" />
                        <TextInput label="Email" placeholder="you@mantine.dev" required />
                        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                        <PasswordInput label="Confirm Password" placeholder="Confirm password" required mt="md" />
                        <Button fullWidth mt="xl">
                            Sign in
                        </Button>
                    </Paper>
            
        </Container>
    );
}