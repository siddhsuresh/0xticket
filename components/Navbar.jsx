import React, { useEffect, useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import Link from 'next/link';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    borderRadius: "10px",

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      color:"#FA58B6",
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: "#270082",
      color: "white",
      borderRadius: "10px",
    },
  },
}));

export default function HeaderResponsive() {
    const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links.links[0].link);
  const { classes, cx } = useStyles();
  useEffect(() => {
    if(localStorage.getItem("active")){
      setActive(localStorage.getItem("active"));
    }
  }, []);
  useEffect(() => {
    // storing input name
    localStorage.setItem("active", active);
  }, [active]);
  const items = links.links.map((link) => (
    <Link href={link.link} className="text-4xl" key={link.link}>
    <a
      key={link.label}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        setActive(link.link);
        toggleOpened(false);
      }}
    >
      <div className="text-lg">
        {link.label}
      </div>
    </a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root} style={{
      backgroundColor: "rgba(0,0,0,0.05)",
      backdropFilter: "blur(5px)",
      borderRadius: "20px",
      marginBottom: "5%",
    }} >
      <Container className={classes.header}>
        <div className="flex flex-row gap-4 items-center justify-center text-white font-bold text-lg">
          <img src="/icon.png" className='w-[6.9rem]' alt="icon"></img>
        <span>0xticket</span>
        </div>
        <Group spacing={10} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

const links={
  "links": [
    {
      "link": "/",
      "label": "Home"
    },
    {
      "link": "/items",
      "label": "Tickets"
    },
    {
      "link": "/purchased",
      "label": "Purchased Tickets"
    },
    {
      "link": "/scan",
      "label": "Scan QR Code"
    },
    {
      "link": "/activity",
      "label": "Activity"
    },
  ]
};
