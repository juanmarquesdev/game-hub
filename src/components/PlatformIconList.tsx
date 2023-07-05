import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const getIconBySlug = (slug: string) => {
  if (slug.includes("xbox")) {
    return FaXbox;
  } else if (slug.includes("playstation")) {
    return FaPlaystation;
  } else if (slug.includes("pc")) {
    return FaWindows;
  } else if (slug.includes("nintendo")) {
    return SiNintendo;
  } else if (slug.includes("mac")) {
    return FaApple;
  } else if (slug.includes("android")) {
    return FaAndroid;
  } else if (slug.includes("linux")) {
    return FaLinux;
  } else if (slug.includes("ios")) {
    return MdPhoneIphone;
  } else if (slug.includes("web")) {
    return BsGlobe;
  } else {
    return null;
  }
};

export default function PlatformIconList({ platforms }: Props) {
  const plataformList = platforms
    .map((platform) => getIconBySlug(platform.slug))
    .filter((value, index, array) => {
      return array.indexOf(value) === index;
    });

  return (
    <HStack marginY={"10px"}>
      {plataformList.map((p) => p && <Icon color={"gray.500"} as={p} />)}
    </HStack>
  );
}
