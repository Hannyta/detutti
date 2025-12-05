import { toast } from "react-toastify";

export const confirmToast = (message, onConfirm, onCancel) => {
  toast(
    (t) => (
      <div
        style={{
          padding: "18px",
          borderRadius: "14px",
          background: "rgba(25, 25, 25, 0.85)",
          backdropFilter: "blur(8px)",
          color: "white",
          minWidth: "280px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
          animation: "fadeIn 0.25s ease-out"
        }}
      >
        <span style={{ fontSize: "15px", lineHeight: "1.5", fontWeight: 500 }}>
          {message}
        </span>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px"
          }}
        >
          <button
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm?.();
            }}
            style={{
              padding: "6px 16px",
              background: "#4caf50",
              color: "white",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              transition: "0.15s",
            }}
          >
            Sí
          </button>

          <button
            onClick={() => {
              toast.dismiss(t.id);
              onCancel?.();
            }}
            style={{
              padding: "6px 16px",
              background: "#c04242ff",
              color: "white",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              transition: "0.15s",
            }}
          >
            No
          </button>
        </div>
      </div>
    ),
    {
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      pauseOnHover: false,
      closeButton: false,
      style: { background: "transparent", boxShadow: "none", padding: 0 }
    }
  );
};