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


export function LoginPage() {
    return (
        <Container size={420} my={40}>
            <Title ta="center">
                Welcome back!

            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Login to your account
            </Text>


            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Text c="dimmed" size="sm" ta="center" mt={5}>
                        Do not have an account yet?{' '}
                        <Anchor size="sm" component="button">
                            Create account
                        </Anchor>
                    </Text>
                </Group>
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}