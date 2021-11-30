import React, { useState } from 'react';
import PriceWrapper from '../PriceWrapper';
import { FaCheckCircle } from 'react-icons/fa';
import CreateSubscriptions from '../CreateSubscription';
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';


const ThreeTierPricing = ({children}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

    return (
      <>
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
                  <Button w="full" colorScheme="red" variant="outline" onClick={onOpen}>
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
                    <Button w="full" colorScheme="red" variant="outline" onClick={onOpen}>
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
                  <Button w="full" colorScheme="red" variant="outline" onClick={onOpen}>
                    Get Coupon
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
          </Stack>
        </Box>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You are one step away to get your code</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <CreateSubscriptions onSubmit={onLoginFormSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
      );
    
}

export default ThreeTierPricing