import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Image from "next/image";

function CustomLoader() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <Image
                src={"/loader.png"}
                alt="loader"
                width={300}
                height={300}
                className="w-[200px] h-[200px]"
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default CustomLoader;
