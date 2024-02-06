import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import useAddPolyanet from "../mutations/useAddPolyanet";
import { useCallback } from "react";

type PolyanetCreatorDialogProps = {
  open: boolean;
  onClose: () => void;
  row: number;
  column: number;
};

const AddPolyanetDialog = ({
  open,
  onClose,
  row,
  column,
}: PolyanetCreatorDialogProps) => {
  const { mutate: addPolyanet } = useAddPolyanet();
  const handleAddPolyanet = useCallback(() => {
    addPolyanet({ row, column });
    onClose();
  }, [row, column, addPolyanet, onClose]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Add Polyanet on Row: {row} and Column: {column}?
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleAddPolyanet}>Add</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPolyanetDialog;
