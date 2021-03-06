import { Heading, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

function NavBar() {

  return (
    <Flex justifyContent="space-between" p={4}>
      <Heading
        size="2xl"
        bgGradient="linear(to-r, #C76173 70%, #9A7BC3 100%)"
        bgClip="text"
      >
        Swole Protocol
      </Heading>
      <Flex gap={6}>
        <Link href="/">Home</Link>
        <Link href="/exercises">Exercises</Link>
        <Link href="/workouts">Workouts</Link>
      </Flex>
    </Flex>
  );
}

export default NavBar;
