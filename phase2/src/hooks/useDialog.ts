import { useCallback, useState } from "react";

const useDialog = () => {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);
  return {
    open,
    show,
    hide,
  };
};

export default useDialog;
