import React from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
  } from '@chakra-ui/react';
  import PriceWrapper from '../PriceWrapper';
  import { FaCheckCircle } from 'react-icons/fa';


const ThreeTierPricing = ({children}) => {
    return (
        <Box py={12}>
          <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize="4xl">
              Plans that fit your need
            </Heading>
            <Text fontSize="lg" color={'gray.500'}>
              No credit card needed. Cancel at
              anytime.
            </Text>
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            textAlign="center"
            justify="center"
            spacing={{ base: 4, lg: 10 }}
            py={10}>
            <PriceWrapper>
              <Box py={4} px={12}>
                <Text fontWeight="400" fontSize="2xl">
                  Silver
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                  <span>&#8358;</span>
                  </Text>
                  <Text fontSize="5xl" fontWeight="600">
                    100,
                  </Text>
                  <Text fontSize="5xl" fontWeight="600">
                  000
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    10% discount for the first 5 hotel bookings.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free membership access to use the swimming pool.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Exclusive invite to House9 events.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="red.500" />
                    Valid for 30 Days
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red" variant="outline">
                    Get Coupon
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
    
            <PriceWrapper>
              <Box position="relative">
                <Box py={4} px={12}>
                  <Text fontWeight="400" fontSize="2xl">
                    Gold
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="700">
                    <span>&#8358;</span>
                    </Text>
                    <Text fontSize="5xl" fontWeight="600">
                      500,
                    </Text>
                    <Text fontSize="5xl" fontWeight="600">
                      000
                    </Text>
                  </HStack>
                </Box>
                <VStack
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  py={4}
                  borderBottomRadius={'xl'}>
                  <List spacing={3} textAlign="start" px={12}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      10% discount for the first 5 hotel bookings.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Free membership access to use the swimming pool.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Exclusive invite to House9 events.
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="red.500" />
                    Valid for 60 Days
                  </ListItem>
                  </List>
                  <Box w="80%" pt={7}>
                    <Button w="full" colorScheme="red" variant="outline">
                      Get Coupon
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </PriceWrapper>
            <PriceWrapper>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                Platinum
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                  <span>&#8358;</span>
                  </Text>
                  <Text fontSize="5xl" fontWeight="600">
                    1,000
                  </Text>
                  <Text fontSize="5xl" fontWeight="600">
                    ,000
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue('gray.50', 'gray.700')}
                py={4}
                borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    10% discount for the first 5 hotel bookings.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free membership access to use the swimming pool.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Exclusive invite to House9 events.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="red.500" />
                    Valids for 90 Days
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red" variant="outline">
                    Get Coupon
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
          </Stack>
        </Box>
      );
    
}

export default ThreeTierPricing