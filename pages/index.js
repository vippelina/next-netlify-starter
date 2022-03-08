import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  minWidth: 300,
  boxShadow: 24,
  overflow: "scroll",
  p: 4,
};
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <CssBaseline />
      <Grid
        container
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif') ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Button
            style={{ backgroundColor: "#dd3372", color: "white" }}
            onClick={handleOpen}
            variant="contained"
          >
            𝗞𝗮𝗹𝗮𝘀𝗶𝗻𝗳𝗼!
          </Button>
        </Grid>

        <Modal
          disableScrollLock={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              𝘿𝙞𝙨𝙠𝙤
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              𝗛𝗲𝗷! <span role="img">💖</span> 𝗜𝗿𝗮𝗶𝗱𝗮 𝗳𝘆𝗹𝗹𝗲𝗿 𝟭𝟭 𝗮̊𝗿 𝗼𝗰𝗵 𝘃𝗶𝗹𝗹 𝗴𝗮̈𝗿𝗻𝗮
              𝗯𝗷𝘂𝗱𝗮 𝗽𝗮̊ 𝗳𝗼̈𝗱𝗲𝗹𝘀𝗲𝗱𝗮𝗴𝘀𝗱𝗶𝘀𝗸𝗼 <span role="img">🥳</span>
              <span role="img">🎈</span>𝟮𝟯/𝟰 𝗵𝗲𝗺𝗺𝗮 𝗵𝗼𝘀 𝗼𝘀𝘀 𝗽𝗮̊ 𝗧𝗲𝗴𝗲𝗹𝗯𝗿𝘂𝗸𝘀𝘃𝗮̈𝗴𝗲𝗻
              𝟯𝟱! 𝗩𝗶 𝗯𝗷𝘂𝗱𝗲𝗿 𝗽𝗮̊ 𝗺𝗮𝘁, 𝗺𝗲𝗱𝗱𝗲𝗹𝗮 𝗼𝘀𝘀 𝗼𝗺 𝗻𝗶 𝗵𝗮𝗿 𝗻𝗮̊𝗴𝗿𝗮 𝗮𝗹𝗲𝗿𝗴𝗶𝗲𝗿.🍕🌮🍔
              𝗗𝗶𝘀𝗸𝗼𝘁 𝗮̈𝗿 𝗸𝗹 𝟭𝟳-𝟮𝟭🎉🎊 𝗢𝘀𝗮 𝘁𝗶𝗹𝗹 𝗺𝗮𝗺𝗺𝗮{" "}
              <a href="sms:(46)(0739636977)">𝗩𝗶𝗯𝗲𝗸𝗲: 𝟬𝟳𝟯𝟵𝟲𝟯𝟲𝟵𝟳𝟳</a> 𝘀𝗲𝗻𝗮𝘀𝘁
              𝗳𝗿𝗲𝗱𝗮𝗴 𝟭𝟱 𝗮𝗽𝗿𝗶𝗹! 🌺💗
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </>
  );
}
