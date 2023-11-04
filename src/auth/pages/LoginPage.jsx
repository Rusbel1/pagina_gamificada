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



export function LoginPage() {
    return (
            <Container size={420} my={40} style={{ padding: 15, marginBottom: 10, marginTop: 10 ,}}>
                <div style={{ backgroundImage: `url(${background})`,width:'100%',height:'100vh',position:'absolute',top:0,left:0, zIndex:-1,backgroundSize: 'cover' }}></div>
                <Title ta="center" color='darkslategray'>
                    Welcome back!

                </Title>
                <Text size="sm" ta="center" mt={5} color='darkslategray'>
                    Login to your account
                </Text>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label="Email" placeholder="you@mantine.dev" required />
                    <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                        <Text c="dimmed" size="sm" ta="center" mt={5}>
                            Do not have an account yet?{' '}
                            <Anchor size="sm" component="button" style={{color:'darkslategray'}}>
                                Create account
                            </Anchor>
                        </Text>
                    </Group>
                    <Button fullWidth mt="xl" style={{backgroundColor:'darkslategray'}}>
                        Sign in
                    </Button>
                </Paper>
        </Container>
    );
}