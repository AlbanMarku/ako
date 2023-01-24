import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import ProfilePic from '@/public/profile.png';

const Profile = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src={ProfilePic}
          alt="Reny"
          width="130"
          height="130"
          style={{
            borderRadius: '50%',
            marginTop: '-65px',
            border: '3px solid #189AB4',
          }}
        />
      </Box>
      <Typography textAlign="center" mt={2} variant="h5" color="#189AB4">
        Reny Pacheco
      </Typography>
      <Typography textAlign="center" mt={2} variant="body1" color="#189AB4">
        Software Engineer @ Test Company
      </Typography>
    </>
  );
};

export default Profile;
