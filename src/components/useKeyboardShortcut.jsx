import { useEffect, useState } from "react";

function useKeyboardShortcut(keys, callback) {
  const [isPressed, setIsPressed] = useState(false);
  const [pressedKeys, setPressedKeys] = useState(new Set()); // Default value for pressedKeys

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!pressedKeys) return; // Early return if not initialized

      const newPressedKeys = new Set([...pressedKeys, event.key]);
      setIsPressed(keys.every((key) => newPressedKeys.has(key)));
    };

    const handleKeyUp = (event) => {
      const newPressedKeys = new Set(
        [...pressedKeys].filter((key) => key !== event.key)
      );
      setIsPressed(keys.every((key) => newPressedKeys.has(key)));
    };

    const handleBlur = () => setIsPressed(false); // Optional listener for focus loss

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur); // Optional listener

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur); // Remove optional listener
    };
  }, [keys]);

  useEffect(() => {
    if (isPressed && callback) {
      callback();
    }
  }, [isPressed, callback]);

  return isPressed;
}

export default useKeyboardShortcut;
