import React from "react";
import { Center, ScrollView, Text, Image, Heading, Box, Divider, HStack, Link } from "native-base";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const iconSize = 36;

const AboutScreen = () => {
  return (
    <>
      <Header title="About" withLogo={true} />
      <ScrollView>
        <Box p={5} background="white" m={5} rounded="2xl">
          <Center>
            <Image source={require("../assets/icon.png")} alt="logo" width={180} height={180} />
            <Heading fontSize="3xl"> MY NEWS </Heading>
            <Text mt={5} fontSize="lg">
              My News is an application based on react netive. This app uses the API from https://newsapi.org/.
            </Text>
            <Text mt={2} fontSize="lg">
              This My News application contains news. You can use it to search news without any ads. This application was made by Team 4 PAB. Thank you for your help in developing the My News application.
            </Text>
            <Text mt={2} fontSize="lg">
              Thank you for your help in developing the My News application.
            </Text>
            <Divider my={5} />
            <HStack space={8}>
              <Link href="https://newsapi.org/">
                <Ionicons name="browsers-outline" size={iconSize} />
              </Link>
              <Link href="https://www.instagram.com/siclass_03/?hl=id">
                <Ionicons name="ios-logo-instagram" size={iconSize} />
              </Link>
              <Link href="https://ittelkom-sby.ac.id/">
                <Ionicons name="earth-outline" size={iconSize} />
              </Link>
            </HStack>
          </Center>
        </Box>
      </ScrollView>
    </>
  );
};

export default AboutScreen;
