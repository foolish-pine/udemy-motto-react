import { FC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: () => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClick } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={onClick}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          m="auto"
          src={imageUrl}
          alt="プロフィール画像"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
