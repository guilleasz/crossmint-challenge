import useMap from "../queries/useMap";
import AstralObject from "./AstralObject";
import styles from "./Galaxy.module.css";

const Galaxy = () => {
  const map = useMap();
  const totalRows = map.data?.length || 0;
  return (
    <div className={styles.container}>
      {map.data?.map((row, rowIndex) => {
        const totalColumns = row.length;
        return row.map((cell, columnIndex) => (
          <div
            key={`${rowIndex}-${columnIndex}`}
            style={{
              width: `${100 / totalRows}%`,
              height: `${100 / totalColumns}%`,
            }}
          >
            <AstralObject
              galaxyCell={cell}
              row={rowIndex}
              column={columnIndex}
            />
          </div>
        ));
      })}
    </div>
  );
};

export default Galaxy;
