import { NextPage } from 'next';
import Social from './Social';
import Box from '@mui/material/Box';

type SocialList = {
  name: string;
  link: string;
};

const socials: SocialList[] = [
  {
    name: 'github',
    link: 'https://github.com/reny-pacheco',
  },
  {
    name: 'linkedIn',
    link: 'https://linkedin.com/in/reny-pacheco',
  },
  {
    name: 'facebook',
    link: 'https://web.facebook.com/reny.vargas.pacheco.08',
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/__reny',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/pacheco_reny',
  },
];

const Socials: NextPage = () => {
  return (
    <Box
      mt={8}
      display="flex"
      flexWrap="wrap"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: {
          xs: '100%',
          sm: '80%',
          md: '70%',
        },
      }}
      mx={{ sm: 'auto' }}
    >
      {socials.map((social) => (
        <Social key={social.name} name={social.name} link={social.link} />
      ))}
    </Box>
  );
};

export default Socials;
