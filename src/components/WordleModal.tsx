import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface WordleModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    title: string;
    word: string;
    round?: number;
    isCorrect: boolean;
}

const WordleModal = (props: WordleModalProps) => {
    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={props.isOpen}
            onClose={props.onClose}
            isCentered
        >
            <ModalOverlay
                bg="rgba(164,53,240, 0.4)"
                backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
                <ModalHeader className="text-center">{props.title}</ModalHeader>

                <ModalBody className="text-center">
                    <p>
                        The word is :{' '}
                        <span className="font-bold">{props.word}</span>
                    </p>
                    <p>
                        {props.isCorrect && (
                            <span>
                                You have guessed the word in {props.round}{' '}
                                turn(s)
                            </span>
                        )}
                    </p>
                </ModalBody>

                <ModalFooter>
                    <Link
                        to={'/'}
                        style={{
                            marginRight: '12px',
                            fontWeight: 'bold',
                            backgroundColor: '#E3651D',
                            color: '#fff',
                            padding: '12px',
                            borderRadius: '8px'
                        }}
                    >
                        Back to Home
                    </Link>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
export default WordleModal;
