import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { chakra, Box, Text, Flex } from "@chakra-ui/react";

// Styles and Icons
import { IconAward, IconBolt, IconRefresh, IconStack, TablerIconProps } from "@tabler/icons";

// My Components
import { PrimaryCard } from "../../components";

const Benefit: React.FC = () => {
  return (
    <PrimaryCard notBorderTop>
      <Box mb="3" textAlign="center">
        <Text display="flex" fontSize="3xl" fontWeight="semibold" justifyContent="center">
          Antes de
          <Text color="pri.600" mx="1">
            publicar
          </Text>{" "}
          tu vehículo
        </Text>
        <Text color="gray.400" fontWeight="medium" lineHeight="none" maxW="xl" mx="auto">
          Entérate de algunas de las ventajas que nuestra página tiene para ofrecerte a ti y a tu agencía, entre las
          cuales están
        </Text>
      </Box>
      <div className="mt-6 md:mt-10">
        <div className="w-full">
          <Swiper
            loop
            loopFillGroupWithBlank
            style={{ zIndex: 0 }}
            autoplay={{
              delay: 5000,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            slidesPerGroup={1}
            slidesPerView={1}
            spaceBetween={10}
            speed={700}
          >
            <SwiperSlide>
              <BenefitItem
                Icon={IconStack}
                description={
                  <Text>
                    Al usar nuesta aplicación no tendrás problema en encontrar lo que necesitas, gracias a nuestro{" "}
                    <chakra.span color="pri.500" fontWeight="semibold" mx="1">
                      diseño simple, intuitivo, minimalista y adaptable
                    </chakra.span>{" "}
                    a cualquier pantalla.
                  </Text>
                }
                title="Diseño Intuitivo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitItem
                Icon={IconBolt}
                description={
                  <Text>
                    Date la oportunidad de experimentar una{" "}
                    <chakra.span color="pri.500" fontWeight="semibold">
                      venta o compra rápida
                    </chakra.span>{" "}
                    de tus vehículos, gracias a las cualidades por las que se destaca nuestra página.
                  </Text>
                }
                title="Rapidez Asegurada"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitItem
                Icon={IconRefresh}
                description={
                  <Text>
                    Nunca te abandonaremos, por esa razón siempre estamos trabajando en{" "}
                    <chakra.span mx="1" color="pri.500" fontWeight="semibold">
                      grandes funcionalidades futuras
                    </chakra.span>{" "}
                    que harán tu experiencia cada vez mejor.
                  </Text>
                }
                title="Actualizaciones frecuentes"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitItem
                Icon={IconAward}
                description={
                  <Text>
                    Nuestra página está{" "}
                    <chakra.span mx="1" color="pri.500" fontWeight="semibold">
                      dirigida para empresas o persona{" "}
                    </chakra.span>
                    que simplemente desean cambiar o adquir un vehículo. Cree su cuenta y luego su agencia online
                    completamente gratis.
                  </Text>
                }
                title="Amplio público"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </PrimaryCard>
  );
};

interface BenefitItemProps {
  Icon: React.FC<TablerIconProps>;
  title: string;
  description: React.ReactElement;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ Icon, title, description }) => (
  <Flex className="flex">
    <Box mt={1} bg="pri.500" color="white" display="grid" h={10} mb="2" placeItems="center" w={10}>
      <Icon className="w-6 h-6" size="1.75rem" strokeWidth={1.5} />
    </Box>
    <Box flex="1" ml={[2, null, 3]}>
      <Text color="gray.800" fontSize="lg" fontWeight="medium" lineHeight="6">
        {title}
      </Text>
      <dd className="mt-1 text-base text-gray-500 md:mt-2">{description}</dd>
    </Box>
  </Flex>
);

export default Benefit;
