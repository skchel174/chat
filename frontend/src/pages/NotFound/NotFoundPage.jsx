import {Box, Button, Card, CardActions, CardContent, Divider, Typography} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Link} from "react-router-dom";

const NotFoundPage = () => {

  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Card sx={{
        maxWidth: 400,
        padding: "15px 15px 5px",
      }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: 26,
              marginBottom: "25px",
            }}
            component="h3"
            color="text.primary"
            gutterBottom
          >
            Page Not Found
          </Typography>
          <Typography
            component="p"
            color="text.secondary"
          >
            Looks like you've followed a broken link or entered a URL that doesn't exist.
          </Typography>
        </CardContent>

        <Divider
          sx={{
            marginTop: "25px",
            marginBottom: "15px",
          }}
        />

        <CardActions>
          <Button
            size="small"
            startIcon={<ArrowBackIosNewIcon sx={{
              fontSize: "12px!important",
            }}/>}
          >
            <Link to="/">
              Back to chat
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default NotFoundPage;
