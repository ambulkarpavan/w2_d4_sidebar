import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
  } from '@chakra-ui/react'

  import { BiHomeAlt } from 'react-icons/bi';
  import { FiTrendingUp } from 'react-icons/fi';
  import { MdOutlineExplore } from 'react-icons/md';
  import { AiOutlineStar } from 'react-icons/ai';
  import { FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        {/* <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack>
        </RadioGroup> */}
        {/* <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer placement={placement} onClose={onClose} isOpen={onOpen} >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader color="black" fontWeight="600" fontSize="25px" marginLeft="30px">Logo</DrawerHeader>
            <DrawerBody>
          
<Button

  size='md'
  height='55px'
//   width='250px'
padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
 backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <BiHomeAlt /> __Home
</Button>

<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <FiTrendingUp /> __Trending
</Button>
<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <MdOutlineExplore></MdOutlineExplore> __Explore
</Button>
<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <AiOutlineStar/> __Favourites
</Button>
<Button
  size='md'
  height='55px'
  padding="10px 180px 10px 10px "
  border="none"
  marginBottom="10px"
  backgroundColor="white"
 _hover={{ backgroundColor:"skyblue"}}
//   borderColor='green.500'
>
 <FiSettings/> __Setting
</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default Sidebar



