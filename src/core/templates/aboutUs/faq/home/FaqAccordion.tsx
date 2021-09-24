import React, { FC } from "react";
import Link from "next/link";
import {
  Box,
  Accordion,
  AccordionItem,
  Heading,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  chakra,
} from "@chakra-ui/react";
import { PrimaryCard } from "@/components";

const faqs = [
  {
    q: "¿Qué es Automarket RD?",
    a: (
      <Text>
        <chakra.span color="pri.600" fontWeight="semibold">
          Automarket RD
        </chakra.span>{" "}
        es un ecommerce creado especialmente para el sector automovilístico, en dónde se le podrá dar publicidad a todo
        tipo de vehículo para todo público, garantizando una experiencia de usuario única mediante la plataforma de
        ventas más robusta y planificada del país cumpliendo con estándares e implementando las mejores y más nuevas
        tecnologías para darles siempre el mejor servicio posible con gran rapidez a todos nuestros clientes.
      </Text>
    ),
  },
  {
    q: "¿Qué te ofrecemos?",
    a: (
      <>
        <Text>
          Te ofrecemos una experiencia única al momento de vender tus vehículos ya qué contamos con un amplio público,
          con las mejores campañas de marketing y grandes anuncios dentro de la web.
        </Text>
        <br />
        <Text>
          A ti que deseas adquirir un vehículo, nuestra plataforma será tu mejor opción ya que está construida con
          tecnologías de última generación además de que contamos con un enorme catálogo de vehículos de las empresas
          más reconocidas del país, para siempre darte confiabilidad a la hora de tu compra.
        </Text>
      </>
    ),
  },
  {
    q: "¿Cuáles problemáticas te solucionamos?",
    a: "Para nadie es un secreto que en los últimos años la tecnología ha cambiado nuestras vidas en muchas cosas, pero ",
  },
  {
    q: "¿Cuál es el costo de utilizar nuestra plataforma? ",
    a: (
      <Text>
        Nos complace anunciar que nuestra plataforma es completamente gratuita para aquellas personas que desean
        publicar sus vehículos, aunque si quiere extender sus recursos y tener un mayor alcance, pueden consultar
        nuestra {/* <Link passHref href="/pricing/plans"> */}{" "}
        <chakra.span _hover={{ textDecor: "underline" }} color="blue.600" cursor="pointer">
          sección de planes
        </chakra.span>{" "}
        {/* </Link>{" "} */}
        los cuales se adaptan perfectamente para todo tipo de público. Pero no te preocupes, esta es la única página que
        cuenta con sistemas de cupones, los cuales estaremos regalando a fieles clientes, estos cupones servirán para
        bajar el precio de los planes
      </Text>
    ),
  },
  {
    q: "¿Por qué es importante darse de alta en Automarket RD?",
    a: "",
  },
  {
    q: "¿Qué tenemos nosotros que la competencia no tiene?",
    a: "",
  },
  {
    q: "¿Cuáles mejoras están en camino?",
    a: "Actualmente estamos trabajando en muchas cosas nuevas que harán nuestra plataforma mucho más increíble de lo que ya es hoy en día, nunca abandonaremos a los clientes, siempre te daremos las mejores condiciones para que tu experiencia sea la mejor.",
  },
];

export const FaqAccordion: FC = () => {
  return (
    <Accordion>
      {faqs.map((faq, i) => (
        <Box bg="white" key={i} mb="2" shadow="sm">
          <AccordionItem border="0" key={i}>
            <h2>
              <AccordionButton _focus={{ shadow: "none" }}>
                <Box flex="1" textAlign="left">
                  <Heading size="sm">
                    {++i}. {faq.q}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq.a}</AccordionPanel>
          </AccordionItem>
        </Box>
      ))}
    </Accordion>
  );
};
