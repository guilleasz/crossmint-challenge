import {
  GalaxyCell,
  AstralObject as AstralObjectEnum,
  SoloonColor,
} from "../types";
import AddAstralObject from "./AddAstralObject";
import PolyanetImg from "../assets/polyanet.png";
import ComethImg from "../assets/cometh.png";
import WhiteMoon from "../assets/white-moon.png";
import RedMoon from "../assets/red-moon.png";
import BlueMoon from "../assets/blue-moon.png";
import PurpleMoon from "../assets/purple-moon.png";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCallback } from "react";
import useDeleteAstralObject from "../mutations/useDeleteAstralObject";
import styles from "./AstralObject.module.css";
import clsx from "clsx";

const getSoloonSrc = (color: SoloonColor) => {
  switch (color) {
    case SoloonColor.Blue:
      return BlueMoon;
    case SoloonColor.Purple:
      return PurpleMoon;
    case SoloonColor.Red:
      return RedMoon;
    case SoloonColor.White:
      return WhiteMoon;
  }
};

type AstralObjectProps = {
  galaxyCell: GalaxyCell;
  row: number;
  column: number;
};

const getAstralObjectImage = (galaxyCell: GalaxyCell) => {
  switch (galaxyCell?.type) {
    case AstralObjectEnum.Polyanet:
      return <img className={styles.img} src={PolyanetImg} alt="Polyanet" />;
    case AstralObjectEnum.Cometh:
      return (
        <img
          className={clsx(styles.img, styles[galaxyCell.direction])}
          src={ComethImg}
          alt="cometh"
        />
      );
    case AstralObjectEnum.Soloon:
      return (
        <img
          className={styles.img}
          src={getSoloonSrc(galaxyCell.color)}
          alt={`${galaxyCell.color} Soloon`}
        />
      );
    default:
      return <></>;
  }
};

const AstralObject = ({ galaxyCell, row, column }: AstralObjectProps) => {
  const {
    mutate: deleteAstralObject,
    isLoading: isDeleting,
    isSuccess: isDeleted,
  } = useDeleteAstralObject();
  const handleDeleteAstralObject = useCallback(() => {
    deleteAstralObject({ type: galaxyCell!.type, row, column });
  }, [galaxyCell, row, column, deleteAstralObject]);
  if (!galaxyCell) {
    return <AddAstralObject row={row} column={column} />;
  }
  const astralObjectImage = getAstralObjectImage(galaxyCell);
  return (
    <div className={styles.container}>
      {astralObjectImage}
      <IconButton
        className={styles.deleteButton}
        onClick={handleDeleteAstralObject}
        disabled={isDeleting || isDeleted}
      >
        <DeleteIcon className={styles.deleteIcon} />
      </IconButton>
    </div>
  );
};

export default AstralObject;
