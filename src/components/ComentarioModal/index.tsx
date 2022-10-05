import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CSSProperties } from "react";
import "./styles.css";

const ComentarioModal = ({
  ...props
}: {
  open: boolean;
  setOpen: any;
  borderColor: string;
}) => {
  const { open, setOpen, borderColor } = props;

  const textoPrimarioStyles: CSSProperties = {
    fontSize: "18.5px",
    fontWeight: "700",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#7D7D7D",
  };

  const textoSecundarioStyles: CSSProperties = {
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "12.5px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#7D7D7D",
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        hideBackdrop={true}
        PaperProps={{
          style: {
            boxShadow: "5px 6px 4px 0px #00000026",
            border: `2px solid ${borderColor}`,
            borderRadius: "9px",
          },
        }}
      >
        <DialogContent style={{ padding: "3px 24px" }}>
          <p style={{ ...textoSecundarioStyles }}>
            Comentário realizado no dia 04 da jornada (28/09/2022)
          </p>
          <p style={{ ...textoPrimarioStyles }}>
            “Este dia eu tive uma insônia. Dormir apenas 3 horas durante a
            noite, mas acredito que não foi por conta somente da DA, mas sim
            porque tive uma experiência familiar horrível.”
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ComentarioModal;
