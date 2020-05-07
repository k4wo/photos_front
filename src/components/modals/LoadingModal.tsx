import React, { useState, useCallback, useEffect } from "react";

import Modal from "./Modal";

import "./modals.css";
import Linear from "../loaders/Linear";
import ButtonIcon from "../buttons/ButtonIcon";

interface Props {
  children: (data: Array<any> | null) => React.ReactNode;
  className?: string;
  fetchData: (signal: AbortSignal) => Promise<Response>;
  onClose: () => void;
  title: string;
}

const LoadingModal: React.FC<Props> = ({ title, onClose, children, fetchData, className }) => {
  const [data, setData] = useState(null);
  const onFetch = useCallback(
    async signal => {
      const response = await fetchData(signal);
      const data = await response.json();
      setData(data);
    },
    [fetchData]
  );

  useEffect(() => {
    const controller = new AbortController();
    onFetch(controller.signal);
    return (): void => controller.abort();
  }, [onFetch]);

  return (
    <Modal onClose={onClose} className={className}>
      <div className="action-modal__title">
        <span>{title}</span>
        <ButtonIcon icon="times" handleClick={onClose} size="2x" />
      </div>
      {data === null && <Linear />}
      {children(data)}
    </Modal>
  );
};

export default LoadingModal;
