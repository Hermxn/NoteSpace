import TextField from "@mui/material/TextField";

export default function UserTextField({ value, onchange }) {
  return (
    <TextField variant="standard" value={value} onChange={onchange}></TextField>
  );
}
