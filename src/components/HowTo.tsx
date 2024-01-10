import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    UnorderedList,
    ListItem,
    Grid,
    GridItem,
    Box
} from '@chakra-ui/react';

interface HowToProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const HowTo = (props: HowToProps) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay
                bg="rgba(164,53,240, 0.4)"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader className="text-center" color={'#E3651D'}>
                    How To PLay
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text
                        fontStyle={'italic'}
                        fontWeight={'bold'}
                        marginBottom={'2'}
                    >
                        Guess The wordle in 6 tries or less
                    </Text>
                    <UnorderedList>
                        <ListItem>
                            Each guess must be a valid 5-letter word.
                        </ListItem>
                        <ListItem>
                            The color of the tiles will change to show how close
                            your guess was to the word.
                        </ListItem>
                    </UnorderedList>
                    <Text
                        fontStyle={'italic'}
                        fontWeight={'bold'}
                        marginBottom={'2'}
                    >
                        Examples:
                    </Text>
                    <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            bg="#E3651D"
                            color={'#fff'}
                            fontWeight={'bold'}
                        >
                            H
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                        >
                            A
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                            bg="#000"
                            color={'#fff'}
                        >
                            S
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                            bg="#A9A9A9"
                            color={'#fff'}
                        >
                            N
                        </GridItem>
                        <GridItem
                            w="12"
                            h="25"
                            className="text-center"
                            border={'1px solid #eee'}
                            fontWeight={'bold'}
                        >
                            A
                        </GridItem>
                    </Grid>
                    <Box marginTop={2}>
                        <Text>
                            <span className="font-bold">H</span> is in the word
                            and in the correct spot.
                        </Text>
                        <Text>
                            <span className="font-bold">S</span> is in the word
                            but in the wrong spot.
                        </Text>
                        <Text>
                            <span className="font-bold">N</span> is not in the
                            word in any spot.
                        </Text>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
export default HowTo;
