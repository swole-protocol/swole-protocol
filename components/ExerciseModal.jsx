import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Center,
    List,
    ListItem,
    ListIcon,
    CheckIcon 
  } from "@chakra-ui/react";


  export default function BeginModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        name,
        description,
        muscleGroup,
        equipment,
        type,
        image,
        video,
        brand,
        metadata
    } = props.exercise;

    return (
        <Box mb={[0, 2]}>
            
            <Center py={6} onClick={onOpen}>
                <Box
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Stack
                        textAlign={'center'}
                        p={6}
                        color={useColorModeValue('gray.800', 'white')}
                        align={'center'}>
                        <Text
                            fontSize={'sm'}
                            fontWeight={500}
                            bg={useColorModeValue('green.50', 'green.900')}
                            p={2}
                            px={3}
                            color={'green.500'}
                            rounded={'full'}>
                            {name.toUpperCase()}
                        </Text>
                        <Stack direction={'row'} align={'center'} justify={'center'}>
                            <img src={image}/>
                        </Stack>
                    </Stack>

                    <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                        <Button
                            onClick={addtoList}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            _hover={{
                            bg: 'green.500',
                            }}
                            _focus={{
                            bg: 'green.500',
                            }}>
                            Add to Workout
                        </Button>
                    </Box>
                </Box>
                </Center>
        




        <Modal isOpen={isOpen} onClose={onClose} size='lg'>
          <ModalOverlay bg='none'
            backdropFilter='auto'
            backdropInvert='10%'
            backdropBlur='3px'
          />
          <ModalContent>
            <ModalBody p={6}>
              <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={900} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>{name.toUpperCase()}</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            Create, Share, GET SWOLE!✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>Name:</FormLabel>
                                <FormLabel>{name.toUpperCase()}</FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description:</FormLabel>
                                <FormLabel>{description}</FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>muscleGroup:</FormLabel>
                                <FormLabel>{muscleGroup}</FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Equipment:</FormLabel>
                                <FormLabel>{equipment}</FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>type:</FormLabel>
                                <FormLabel>{type}</FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Video:</FormLabel>
                                <FormLabel>{type}</FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Brand:</FormLabel>
                                <FormLabel>{brand}</FormLabel>
                            </FormControl>

                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Include Media</Checkbox>
                                    <Link color={'blue.400'}>Reset</Link>
                                </Stack>
                            </Stack>
                            
                        </Stack>
                    </Box>
                </Stack>
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box >
    )
  }

  function addtoList(){}