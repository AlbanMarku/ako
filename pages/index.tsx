import Head from 'next/head';
import Profile from '@/components/Profile';
import { Box } from '@mui/material';
import Tags from '@/components/Tags';
import SocialList from '@/components/SocialList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box
      sx={{
        background: '#D4F1F4',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Head>
          <title>Reny Pacheco</title>
          <meta name="reny pacheco profile" content="Profile by Reny Pacheco" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          sx={{
            width: {
              xs: '100vw',
              sm: 800,
            },
            backgroundColor: 'rgba(255, 255, 255, .55)',
            backdropFilter: 'blur(5px)',
            borderRadius: 2,
          }}
          mt={{ xs: 12, sm: 20 }}
          mx={1}
        >
          <Profile />
          <Tags />
          <SocialList />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
