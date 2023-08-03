"use client";

import {
  ActionIcon,
  Box,
  Divider,
  Flex,
  Grid,
  Group,
  Paper,
  Spoiler,
  Text,
} from "@mantine/core";
import { IconDots, IconUserBolt, IconUserCircle } from "@tabler/icons-react";

export function Home() {
  return (
    <>
      <Box>
        <Paper p={10} mb={10} bg={"gray.3"}>
          <Group position="apart" pb={5}>
            <Flex align={"center"} gap={"xs"}>
              <IconUserCircle size={25} />
              <Text>Bagas Nusantara Nabillah</Text>
            </Flex>
            <Flex>
              <ActionIcon variant="transparent" size={"xs"}>
                <IconDots />
              </ActionIcon>
            </Flex>
          </Group>
          <Divider color="black.3" />
          <Text fw={"bold"} fz={"xs"}>
            Announcement
          </Text>
          <Spoiler
            maxHeight={50}
            showLabel={"selengkapnya"}
            hideLabel={"sembunyikan"}
            transitionDuration={500}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            temporibus tempore, consequuntur reiciendis fuga at. Deserunt
            facilis mollitia repellat fuga, at autem blanditiis ipsa provident.
            Eveniet ducimus at odit dolore.
          </Spoiler>
        </Paper>
        
        
      </Box>
    </>
  );
}
