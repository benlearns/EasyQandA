import { Box, Button, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Text fontWeight="bold" fontSize="8xl" textAlign="center" mt={40}>
          Easy Q&A
        </Text>
        <Text textAlign="center" fontSize="3xl" mt={10}>
          Get Questions from Followers
        </Text>
        <Text fontSize="3xl"> Get Payments from Sponsored Questions</Text>
        <Button variant="solid" size="lg" mt={50}>
          Sign in with Google
        </Button>
        <Button variant="solid" size="lg" mt={5}>
          Sign in with Twitter
        </Button>
      </Box>
    </>
  );
}
