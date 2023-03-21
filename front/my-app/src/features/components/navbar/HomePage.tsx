import { useState } from "react";
import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box";

export const HomePage = () => {
  const [visible, setVisible] = useState(false);

  const handleLogoClick = () => {
    setVisible(!visible);
  }

  return (
    <>
     <h1> home page</h1> 

    {/* asfsdgsfgfdgsf */}
      {/* {visible && (
        <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
          <Spacer y={1} />
          <Text size="$lg">
            <br></br>
            <br></br>
            <br></br>
            <br></br>

           <h1> home page</h1> 
          </Text>
        </Box>
      )} */}
    </>
  );
}