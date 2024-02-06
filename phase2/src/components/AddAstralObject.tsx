import { IconButton, Menu, MenuItem } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import AddPolyanetDialog from "./AddPolyanetDialog";
import useDialog from "../hooks/useDialog";
import AddSoloonDialog from "./AddSoloonDialog";
import AddComethDialog from "./AddComethDialog";
import AddIcon from "@mui/icons-material/Add";
import styles from "./AddAstralObject.module.css";
import clsx from "clsx";

type AddAstralObjectProps = {
  row: number;
  column: number;
};

const AddAstralObject = ({ row, column }: AddAstralObjectProps) => {
  const anchorEl = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const {
    open: openAddPolyanetDialog,
    show: showAddPolyanetDialog,
    hide: hideAddPolyanetDialog,
  } = useDialog();
  const {
    open: openAddSoloonDialog,
    show: showAddSoloonDialog,
    hide: hideAddSoloonDialog,
  } = useDialog();
  const {
    open: openAddComethDialog,
    show: showAddComethDialog,
    hide: hideAddComethDialog,
  } = useDialog();

  const handleOpenMenu = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleAddPolyanet = useCallback(() => {
    showAddPolyanetDialog();
    handleClose();
  }, [showAddPolyanetDialog, handleClose]);

  const handleAddSoloon = useCallback(() => {
    showAddSoloonDialog();
    handleClose();
  }, [showAddSoloonDialog, handleClose]);

  const handleAddCometh = useCallback(() => {
    showAddComethDialog();
    handleClose();
  }, [showAddComethDialog, handleClose]);

  return (
    <div className={styles.container}>
      <IconButton
        className={clsx(styles.addButton, { [styles.showingMenu]: open })}
        ref={anchorEl}
        onClick={handleOpenMenu}
      >
        <AddIcon className={styles.addIcon} />
      </IconButton>
      <Menu anchorEl={anchorEl.current} open={open} onClose={handleClose}>
        <MenuItem onClick={handleAddPolyanet}>Polyanet</MenuItem>
        <MenuItem onClick={handleAddSoloon}>Soloon</MenuItem>
        <MenuItem onClick={handleAddCometh}>Cometh</MenuItem>
      </Menu>
      <AddPolyanetDialog
        open={openAddPolyanetDialog}
        onClose={hideAddPolyanetDialog}
        row={row}
        column={column}
      />
      <AddSoloonDialog
        open={openAddSoloonDialog}
        onClose={hideAddSoloonDialog}
        row={row}
        column={column}
      />
      <AddComethDialog
        open={openAddComethDialog}
        onClose={hideAddComethDialog}
        row={row}
        column={column}
      />
    </div>
  );
};

export default AddAstralObject;
