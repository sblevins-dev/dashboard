import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

const BlueButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.otherColor.main,
        color:'#888',
        margin:5,
        "&:hover": {
          backgroundColor:'lightblue'
        },
        "&:disabled":{
          backgroundColor:'gray',
          color:'white'
        }
}));

function App() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="otherColor" startIcon={<Settings />}>Add new</Button>
      <Button variant="outlined" startIcon={<Add />}>Outlined</Button>
      <Typography variant="h1" component='h2'>
        It uses h1 style
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>My Button</BlueButton>
    </div>
  );
}

export default App;
