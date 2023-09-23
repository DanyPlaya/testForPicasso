import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SkeletonText,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
export const PostDetailSkeleton = () => {
  return (
    <Card maxW="300px">
      <CardHeader>
        <Heading size="md">
          Post №{" "}
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="1" />
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Heading>
            <Text maxW="100%" maxH="100px" pt="2" fontSize="sm">
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Text>
          </Box>
          <Box>
            <Button>
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
