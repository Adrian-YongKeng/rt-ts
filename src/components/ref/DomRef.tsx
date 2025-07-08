import { useEffect, useRef } from "react";

const DomRef = () => {
  //   const inputRef = useRef<HTMLInputElement>(null);
  //if sure your ref never null - non null assertion
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    // inputRef.current?.focus();
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
