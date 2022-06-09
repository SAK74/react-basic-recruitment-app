import { Button, Paper, Stack, TextField } from "@mui/material"
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react"

interface InputState {
   name?: string;
   location?: string;
}
interface InputCardProps {
   setAddSport: Dispatch<SetStateAction<boolean>>;
}
export const InputCard: FC<InputCardProps> = ({ setAddSport }) => {
   const [input, setInput] = useState<InputState | undefined>(undefined);
   const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
      setInput(prev => ({ ...prev, [name]: value }));
   }
   return <Stack component={Paper}>
      <TextField
         name="name"
         label="Name"
         value={input?.name ? input.name : ""}
         onChange={handleChange}
      />
      <TextField
         name="location"
         label="Location"
         value={input?.location ? input.location : ""}
         onChange={handleChange}
      />
      <Stack direction="row" spacing={2} sx={{
         justifyContent: "flex-end"
      }}>
         < Button
            children="cancel"
            variant="contained"
            onClick={() => setAddSport(false)}
         />
         <Button
            children="save"
            variant="contained"
            onClick={() => {
               alert(`Submiting sport: ${input?.name} with location: ${input?.location}`);
               setAddSport(false);
            }}
         />
      </Stack>
   </Stack >
}