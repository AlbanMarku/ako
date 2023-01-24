import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FooterText = (props: { text: string }) => {
  return (
    <Typography variant="body2" fontSize={{ xs: 10, sm: 11 }}>
      {props.text}
    </Typography>
  );
};

const Footer = () => {
  return (
    <>
      <Box
        px={2}
        py={0.8}
        color=" #189AB4"
        mb={1}
        mt={20}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FooterText text="Developed with" />
        <FavoriteIcon
          sx={{ fontSize: 10, marginBottom: '1px', marginX: '3px' }}
        />
        <FooterText text="by Reny Pacheco" />
      </Box>
    </>
  );
};

export default Footer;
