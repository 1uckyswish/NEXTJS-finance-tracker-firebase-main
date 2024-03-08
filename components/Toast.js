function Toast({ alert, type }) {
  return (
    <div className="toast toast-end text-white">
      <div className={`alert ${type}`}>
        <span className="text-white">{alert}</span>
      </div>
    </div>
  );
}

export default Toast;
