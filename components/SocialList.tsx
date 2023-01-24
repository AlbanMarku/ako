import { NextPage } from 'next';
import Social from './Social';
import Box from '@mui/material/Box';
import myData from "../data/personalData.json";

type SocialList = {
  name: string;
  link: string;
};

//Read json socials data. Still following SocialList type.
const socials: SocialList[] = myData.socials;

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
