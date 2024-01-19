const CopyRight = ({ value }: { value: string }) => (
  <div
    style={{
      fontSize: "18px",
    }}
  >
    {value} &copy;{" "}
    <span style={{ marginRight: "5px" }}>{new Date().getFullYear()}</span>
    <span>
      All rights reserved. Use of this site signifies your agreement to the
      terms of use.
    </span>
  </div>
);

export default CopyRight;
