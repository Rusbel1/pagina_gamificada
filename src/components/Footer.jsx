import { Text, Container, ActionIcon, Group, rem, Avatar } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconAlien, IconBrandMantine } from '@tabler/icons-react';

import classes from './Footer.styles.module.css';


const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Support', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },

    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },

    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title} gap={10}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <IconBrandMantine size={30} color='white'/>
          <Text size="xs" c="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className={classes.groups} gap={15}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm" color='white'>
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end">
          <ActionIcon size="lg"  variant="subtle">
            <IconBrandTwitter  stroke={1.5} color='white' />
          </ActionIcon>
          <ActionIcon size="lg"  variant="subtle">
            <IconBrandYoutube  stroke={1.5} color='white' />
          </ActionIcon>
          <ActionIcon size="lg"  variant="subtle">
            <IconBrandInstagram stroke={1.5} color='white'/>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}