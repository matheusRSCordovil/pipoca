import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { CSSProperties } from "react";
import API from "../../services";
import "./styles.css";

const DeletarModal = ({
  ...props
}: {
  open: boolean;
  setOpen: any;
  id: number | null;
}) => {
  const { open, setOpen, id } = props;

  const handleDelete = () => {
    API.delete(`JornadaRegistro/${id}`).then((res) => {
      setTimeout(() => {
        setOpen(false);
      }, 400);
    });
  };

  const buttonStyles: CSSProperties = {
    height: "31px",
    width: "134.5399932861328px",
    borderRadius: "20.5px",
    color: "#7d7d7d",
    backgroundColor: "#d6d6d6",
    border: "none",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "13px",
    letterSpacing: "0em",
    textAlign: "center",
    boxShadow: "0px 4px 4px 0px #00000040",
  };

  const textoPrimarioRemedioStyles: CSSProperties = {
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#7D7D7D",
    fontStyle: "italic",
  };

  const textoPrimarioStyles: CSSProperties = {
    fontSize: "18px",
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
          },
        }}
      >
        <DialogContent style={{ padding: "3px 24px" }}>
          <p style={{ ...textoPrimarioStyles }}>
            Tem certeza que deseja excluir o item{" "}
            <span style={{ ...textoPrimarioRemedioStyles }}>“Betnovate N”</span>{" "}
            da sua lista de produtos e cuidados?
          </p>
          <hr />
          <p style={{ ...textoSecundarioStyles }}>
            Ao excluir este item, você estará descontinuando o registro deste
            item no relatório
          </p>
        </DialogContent>

        <DialogActions
          style={{ justifyContent: "space-evenly", marginBottom: 17 }}
        >
          <button style={{ ...buttonStyles }} onClick={handleDelete}>
            EXCLUIR
          </button>
          <button style={{ ...buttonStyles }} onClick={handleClose}>
            Mudei de ideia
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeletarModal;
