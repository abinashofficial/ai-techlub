import { useRef } from "react";
import ChatBot from "../pages/chatbot";

const DraggableChatHead: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const box = boxRef.current;
    if (!box) return;

    dragging.current = true;
    box.setPointerCapture(e.pointerId);

    const rect = box.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    box.style.cursor = "grabbing";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;

    let x = e.clientX - offset.current.x;
    let y = e.clientY - offset.current.y;

    // 📱 Clamp inside viewport
    x = Math.max(0, Math.min(x, innerWidth - rect.width));
    y = Math.max(0, Math.min(y, innerHeight - rect.height));

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  };

  const onPointerUp = () => {
    dragging.current = false;
    const box = boxRef.current;
    if (!box) return;

    box.style.cursor = "grab";

    const rect = box.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;

    // 🧲 Distance to each edge
    const distances = {
      left: rect.left,
      right: innerWidth - rect.right,
      top: rect.top,
      bottom: innerHeight - rect.bottom,
    };

    const nearestEdge = Object.entries(distances).reduce((a, b) =>
      a[1] < b[1] ? a : b
    )[0];

    let x = rect.left;
    let y = rect.top;

    switch (nearestEdge) {
      case "left":
        x = 0;
        break;
      case "right":
        x = innerWidth - rect.width;
        break;
      case "top":
        y = 0;
        break;
      case "bottom":
        y = innerHeight - rect.height;
        break;
    }

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  };

  return (
    <div
      ref={boxRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: "fixed",
        left: 20,
        top: 120,
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "#4f46e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        touchAction: "none",
        userSelect: "none",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
    >
    </div>
  );
};

export default DraggableChatHead;
