import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react';

interface WordleModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    title: string;
    word: string;
    round?: number;
}

const WordleModal = (props: WordleModalProps) => {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay
                bg="rgba(164,53,240, 0.4)"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader className="text-center">{props.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody className="text-center">
                    <p>
                        The word is :{' '}
                        <span className="font-bold">{props.word}</span>
                    </p>
                    <p>
                        {props.round && (
                            <span>
                                You have guessed the word in {props.round}{' '}
                                turn(s)
                            </span>
                        )}
                    </p>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost">Back to Home</Button>
                    <Button
                        bg={'#E3651D'}
                        color={'#fff'}
                        mr={3}
                        onClick={props.onClose}
                    >
                        Try again
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
export default WordleModal;
