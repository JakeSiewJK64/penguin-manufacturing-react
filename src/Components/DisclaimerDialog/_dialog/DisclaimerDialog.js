import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Flex from "@react-css/flex";
import { useState } from "react";
import "./DisclaimerDialog.css";

export default function DisclaimerDialog() {
  const [isOpenDisclaimer, setIsOpenDisclaimer] = useState(true);

  return (
    <div>
      <Dialog open={isOpenDisclaimer}>
        <DialogTitle>
          <Flex row gap={10}>
            <Icon className="mt-1" path={mdiAlert} size={1} />
            <span>Disclaimer</span>
          </Flex>
        </DialogTitle>
        <DialogContent className="w-100">
          <img
            src="https://i.pinimg.com/736x/3f/68/33/3f6833489cc9c6354b06177740fadd59.jpg"
            className="w-100 ml-auto"
            alt=""
          />
          <DialogContentText>
            This website is built as a personal project and does not make any
            form of profit or is intended for any commercial purposes. The
            topics and characters discussed are pure fiction and do not reflect
            any real life entities. Any reference to 3rd party resources is
            based on either references or plain coindental. Thank you for your
            understanding.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setIsOpenDisclaimer(false)}>
            DISMISS
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
