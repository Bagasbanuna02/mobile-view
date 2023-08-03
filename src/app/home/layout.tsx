"use client";

import {
  ActionIcon,
  AppShell,
  Center,
  Drawer,
  Footer,
  Grid,
  Group,
  Header,
  Navbar,
  TextInput,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import React, { useState } from "react";
import {
  IconBroadcast,
  IconBuildingSkyscraper,
  IconCoin,
  IconHome,
  IconMessage,
  IconNetwork,
  IconPlus,
  IconSquarePlus,
  IconUpload,
  IconUserCircle,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  button_action: {},
}));

export function LayoutHome({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [openNav, setNav] = useState(false);
  const [openAside, setAside] = useState(false);

  // client rendering
  const [isClient, setClient] = useState(false);
  useShallowEffect(() => {
    if (window) setClient(true);
  }, []);
  if (!isClient) return <></>;

  return (
    <>
      
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          navbar={
            <Drawer
              opened={openNav}
              onClose={() => setNav(false)}
              title="Authentication"
              size={"xs"}
            >
              {/* Drawer content */}
            </Drawer>
          }
          aside={
            <Drawer
              opened={openAside}
              onClose={() => setAside(false)}
              title="Authentication"
              size={"xs"}
              position="right"
            >
              {/* Drawer content */}
            </Drawer>
          }
          header={
            <Header height={50} pt={8} bg={"dark"}>
              <Grid px={"xs"}>
                <Grid.Col span={"content"}>
                  <ActionIcon
                    variant="transparent"
                    onClick={() => setNav(true)}
                  >
                    <IconUserCircle />
                  </ActionIcon>
                </Grid.Col>
                <Grid.Col span={"auto"}>
                  <TextInput placeholder="Search.." />
                </Grid.Col>
                <Grid.Col span={"content"}>
                  <ActionIcon
                    variant="transparent"
                    onClick={() => setAside(true)}
                  >
                    <IconMessage />
                  </ActionIcon>
                </Grid.Col>
              </Grid>
            </Header>
          }
          footer={
            <Footer bg={"dark"} height={60} p={"md"}>
              <Grid justify="space-around">
                <Grid.Col span={"auto"}>
                  <Center>
                    <ActionIcon variant="transparent">
                      <IconHome />
                    </ActionIcon>
                  </Center>
                </Grid.Col>
                <Grid.Col span={"auto"}>
                  <Center>
                    <ActionIcon variant="transparent">
                      <IconCoin />
                    </ActionIcon>
                  </Center>
                </Grid.Col>
                <Grid.Col span={"auto"}>
                  <Center>
                    <ActionIcon variant="transparent">
                      <IconSquarePlus />
                    </ActionIcon>
                  </Center>
                </Grid.Col>
                <Grid.Col span={"auto"}>
                  <Center>
                    <ActionIcon variant="transparent">
                      <IconBuildingSkyscraper />
                    </ActionIcon>
                  </Center>
                </Grid.Col>
                <Grid.Col span={"auto"}>
                  <Center>
                    <ActionIcon variant="transparent">
                      <IconBroadcast />
                    </ActionIcon>
                  </Center>
                </Grid.Col>
              </Grid>
            </Footer>
          }
        >
          {children}
        </AppShell>
      
    </>
  );
}
