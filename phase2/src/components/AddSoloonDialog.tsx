import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent, useCallback, useState } from "react";
import useAddSoloon from "../mutations/useAddSoloon";
import { SoloonColor } from "../types";

type AddSoloonDialogProps = {
  open: boolean;
  onClose: () => void;
  row: number;
  column: number;
};

const AddSoloonDialog = ({
  open,
  onClose,
  row,
  column,
}: AddSoloonDialogProps) => {
  const [color, setColor] = useState<SoloonColor>(SoloonColor.Blue);
  const { mutate: addSoloon } = useAddSoloon();
  const handleColorChange = useCallback(
    (e: ChangeEvent, value: string) => setColor(value as SoloonColor),
    []
  );
  const handleAddSoloon = useCallback(() => {
    addSoloon({ row, column, color });
    onClose();
  }, [addSoloon, color, row, column, onClose]);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Select a color for Soloon being added on Row: {row} and Column: {column}
      </DialogTitle>
      <DialogContent>
        <FormControl>
          <FormLabel id="color">Color</FormLabel>
          <RadioGroup
            aria-labelledby="color"
            value={color}
            onChange={handleColorChange}
          >
            <FormControlLabel
              value={SoloonColor.Blue}
              control={<Radio />}
              label="Blue"
            />
            <FormControlLabel
              value={SoloonColor.Red}
              control={<Radio />}
              label="Red"
            />
            <FormControlLabel
              value={SoloonColor.Purple}
              control={<Radio />}
              label="Purple"
            />
            <FormControlLabel
              value={SoloonColor.White}
              control={<Radio />}
              label="White"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddSoloon}>Add</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSoloonDialog;
