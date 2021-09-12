import React, { FC, useState, useEffect } from "react";
import { Box, Flex, Text, Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { IconSpeakerphone, IconX } from "@tabler/icons";
import moment from "moment";
import { useSelector } from "@/store";

type BannerBottomType = {
  msg: string;
  msgSm: string;
  buttonLabel: string;
  buttonLink: string;
  hidden: boolean;
  showAt: Date;
};

export const BannerBottom: FC = () => {
  const [payload, setPayload] = useState<BannerBottomType | null>();
  const { agency, isAuth } = useSelector(({ auth }) => auth);

  useEffect(() => {
    const bannerBottomPayload = window.localStorage.getItem("bannerBottom");
    if (!bannerBottomPayload) return;
    const bannerBottomJson: BannerBottomType = JSON.parse(bannerBottomPayload);
    if (bannerBottomJson.hidden) {
      if (moment().diff(bannerBottomJson.showAt, "seconds") >= 0) {
        bannerBottomJson.hidden = false;
      }
    }

    setPayload(bannerBottomJson);
  }, []);

  function onHidden() {
    const bannerBottomPayload = window.localStorage.getItem("bannerBottom");
    if (!bannerBottomPayload) return;
    const bannerBottomJson = JSON.parse(bannerBottomPayload);

    bannerBottomJson.hidden = true;
    bannerBottomJson.showAt = moment().add(30, "minutes").format();
    window.localStorage.setItem("bannerBottom", JSON.stringify(bannerBottomJson));
    if (payload) setPayload({ ...payload, hidden: true });
  }

  return (
    <>
      {isAuth && payload && !payload.hidden && !agency && (
        <Box bottom={[0, null, 6]} left={0} pos="fixed" px={[null, null, "6"]} right={0} w="full" zIndex="10">
          <Flex
            alignItems="center"
            bgColor="pri.500"
            justifyContent="space-between"
            p={[1.5, null, "3"]}
            rounded={["none", null, "md"]}
          >
            <Flex alignItems="center">
              <Flex
                alignItems="center"
                bgColor="pri.700"
                color="white"
                h={["8", null, "10"]}
                justifyContent="center"
                rounded="md"
                w={["8", null, "10"]}
              >
                <IconSpeakerphone size="1.75rem" strokeWidth={1.5} />
              </Flex>
              <Text color="white" display={["none", null, "block"]} fontSize="lg" ml="2">
                {payload.msg}
              </Text>
              <Text color="white" display={[null, null, "none"]} ml="2">
                {payload.msgSm}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Link href={payload.buttonLink}>
                <a>
                  <ChakraLink>
                    <Button bgColor="pri.100" color="pri.800" display={["none", null, "block"]} mr="3">
                      {payload.buttonLabel}
                    </Button>
                    <Button bgColor="pri.100" color="pri.800" display={[null, null, "none"]} mr="1" size="sm">
                      {payload.buttonLabel}
                    </Button>
                  </ChakraLink>
                </a>
              </Link>
              <Button
                alignItems="center"
                color="white"
                display="flex"
                justifyContent="center"
                variant="unstyled"
                onClick={onHidden}
              >
                <IconX />
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
};
