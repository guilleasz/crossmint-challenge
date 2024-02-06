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
import useAddCometh from "../mutations/useAddCometh";
import { ComethDirection } from "../types";

type AddComethDialogProps = {
  open: boolean;
  onClose: () => void;
  row: number;
  column: number;
};

const AddComethDialog = ({
  open,
  onClose,
  row,
  column,
}: AddComethDialogProps) => {
  const [direction, setDirection] = useState<ComethDirection>(
    ComethDirection.Up
  );
  const { mutate: addCometh } = useAddCometh();
  const handleDirectionChange = useCallback(
    (e: ChangeEvent, value: string) => setDirection(value as ComethDirection),
    []
  );
  const handleAddCometh = useCallback(() => {
    addCometh({ row, column, direction });
    onClose();
  }, [addCometh, direction, row, column, onClose]);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Select direction for Cometh being added on Row: {row} and Column:{" "}
        {column}
      </DialogTitle>
      <DialogContent>
        <FormControl>
          <FormLabel id="direction">Direction</FormLabel>
          <RadioGroup
            aria-labelledby="direction"
            value={direction}
            onChange={handleDirectionChange}
          >
            <FormControlLabel
              value={ComethDirection.Up}
              control={<Radio />}
              label="Up"
            />
            <FormControlLabel
              value={ComethDirection.Down}
              control={<Radio />}
              label="Down"
            />
            <FormControlLabel
              value={ComethDirection.Left}
              control={<Radio />}
              label="Left"
            />
            <FormControlLabel
              value={ComethDirection.Right}
              control={<Radio />}
              label="Right"
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddCometh}>Add</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddComethDialog;
