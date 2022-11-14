
import { Button } from "./Button";
import { Box } from "./Box";
import { HiArchive, HiArrowCircleDown,HiBadgeCheck,HiCalculator } from "react-icons/hi";

export const App = () => {
  return (
    <Box  as="main" px={4}  border="normal" borderColor="secondary" pb={3}>
      <Box as="section" bg="background" color="text" mt={4}  display="flex" alignItems="center" flexDirection="column">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, perferendis eveniet exercitationem ex quidem corporis reprehenderit, soluta velit temporibus commodi molestiae voluptatum ipsam quod. Saepe tenetur molestias impedit assumenda odio.
      Modi quod amet sit laboriosam ipsam atque sed, vel dignissimos optio soluta aliquid incidunt numquam ad. Blanditiis doloribus vel, et dicta deleniti aut repellendus nam ut, repellat cupiditate nobis nisi?
        <Box display="flex" justifyContent="center">
          <Button icon = {HiArchive}>Search</Button>
          <Button icon = {HiArrowCircleDown}>Filter</Button>
          <Button icon = {HiBadgeCheck}>Show</Button>
          <Button icon = {HiCalculator} type="submit">Log</Button>
          <Button type="submit" disabled>OUTDIS</Button>
        </Box>
      

      </Box>
      
      
    </Box>

  );
};
