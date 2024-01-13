import React, { useContext } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { AppContext } from "../App";
import { Link, useLocation } from "react-router-dom";

export default function App() {
  const context: any = useContext(AppContext);
  const location = useLocation();
  return (
    <>
      <Modal
        isOpen={context.isInfoModalOpen}
        onOpenChange={context.setInfoModal}
        className="dark text-white"
      >
        <ModalContent className="p-4">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                How To Play
                <p className="font-light">Guess the Wordle in 6 tries.</p>
              </ModalHeader>
              <ModalBody>
                <ul style={{ listStyleType: "disc" }}>
                  <li>Each guess must be a valid 5-letter word.</li>
                  <li>
                    The color of the tiles will change to show how close your
                    guess was to the word.
                  </li>
                </ul>
                <div className="flex flex-col gap-2">
                  <h2>Examples</h2>
                  <div className="flex gap-4">
                    <div className="border-3 border-divider p-2 font-semibold text-white bg-green-900">
                      W
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      E
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      A
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      R
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      Y
                    </div>
                  </div>
                  <p>
                    <span className="font-bold">W</span> is in the word and in
                    the correct spot.
                  </p>

                  <div className="flex gap-4">
                    <div className="border-3 border-divider p-2 font-semibold">
                      P
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold text-white bg-amber-600">
                      I
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      L
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      L
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      S
                    </div>
                  </div>
                  <p>
                    <span className="font-bold">I</span> is in the word but in
                    the wrong spot.
                  </p>

                  <div className="flex gap-4">
                    <div className="border-3 border-divider p-2 font-semibold">
                      V
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold ">
                      A
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      G
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold text-white bg-gray-600">
                      U
                    </div>
                    <div className="border-3 border-divider p-2 font-semibold">
                      E
                    </div>
                  </div>
                  <p>
                    <span className="font-bold">U</span> is not in the word in
                    any spot.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {location.pathname === "/" && (
                  <Link to="/game">
                    <Button color="primary" onPress={onClose}>
                      Play
                    </Button>
                  </Link>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
