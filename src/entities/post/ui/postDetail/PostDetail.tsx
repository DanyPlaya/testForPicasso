import { getRouteMain } from "@/shared/consts/router";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
type PostItemProps = {
  id?: number;
  body?: string;
  title?: string;
};
export const PostDetail = (props: PostItemProps) => {
  const { body, id, title } = props;
  return (
    <Card maxW="300px">
      <CardHeader>
        <Heading size="md">Post №{id}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {title}
            </Heading>
            <Text maxW="100%" maxH="100px" pt="2" fontSize="sm">
              {body}
            </Text>
          </Box>
          <Box>
            <Link to={getRouteMain()}>
              <Button>Back</Button>
            </Link>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
