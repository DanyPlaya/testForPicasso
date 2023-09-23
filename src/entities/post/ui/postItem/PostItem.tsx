import { getRoutePostDetails } from "@/shared/consts/router";
import {
  Card,
  CardHeader,
  Heading,
  Stack,
  CardBody,
  StackDivider,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
//import { HTMLAttributeAnchorTarget } from "react";
import { Link } from "react-router-dom";
type PostItemProps = {
  id:number,
  body:string,
  title:string,
 
}
export const PostItem = (props:PostItemProps) => {
  const {id,body,title} = props
  return (
    <Card maxW="300px"> {/* Установите максимальную ширину */}
    <CardHeader>
      <Heading size="md">Post №{id}</Heading>
    </CardHeader>
    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            {title}
          </Heading>
          <Text
            maxW="100%"  
            maxH="100px" 
            pt="2"
            fontSize="sm"
            overflow="hidden"
            whiteSpace={'nowrap'}  
            textOverflow="ellipsis"
          >
            {body}
          </Text>
        </Box>
        <Box>
          <Link to={getRoutePostDetails(String(id))}>
            <Button>View</Button>
          </Link>
        </Box>
      </Stack>
    </CardBody>
  </Card>
  );
};
