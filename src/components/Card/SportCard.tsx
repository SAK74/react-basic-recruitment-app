import { Card, CardContent, CardHeader } from "@mui/material"
import { FC } from "react"
import { SportType } from "../../types/sports.types"

export const SportDetailCard: FC<SportType> = ({ name, location, description }) => {
   return <Card>
      <CardHeader
         title={`${name} (${location})`}
      />
      <CardContent
         children={description}
      />
   </Card>
}