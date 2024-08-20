"use client"

import { Button, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function Configuration() {
  const [darkTheme, setDarkTheme] = useState()
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  useEffect(() => {
    if(localStorage.theme == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkTheme(true)
    } else if(localStorage.theme == 'light') {
      setDarkTheme(false)
    }
  }, [])

  useEffect(() => {
    if (darkTheme == true) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else if(darkTheme == false) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [darkTheme])

  return (
    <div className="flex flex-wrap gap-2 justify-center w-fit">
      <Dropdown className="hidden md:block">
        <DropdownTrigger>
          <Button isIconOnly className="hidden md:flex bg-blue-500 text-white dark:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6"><path fill="currentColor" d="M197.1 455.5c-54.6-16.1-99.8-54-125.6-103.5h70.7c13.4 43.5 34.5 77.9 54.9 103.5zm33.2-35.5c-13.6-18-27.3-40.6-37.5-68.1H319.2c-10.2 27.4-23.8 50-37.5 68.1c-8.9 11.8-17.8 21.6-25.7 29.4c-7.9-7.8-16.8-17.6-25.7-29.4zM176 256c0-17.1 1.4-33 4-48H332c2.5 15 4 30.9 4 48s-1.4 33-4 48H180c-2.5-15-4-30.9-4-48zm-44.6-48c-2.2 15.1-3.4 31.1-3.4 48s1.2 32.9 3.4 48H53.6c-3.6-15.4-5.6-31.5-5.6-48s1.9-32.6 5.6-48h77.8zm61.4-48c10.2-27.4 23.8-50 37.5-68.1c8.9-11.8 17.8-21.6 25.7-29.4c7.9 7.8 16.8 17.6 25.7 29.4c13.6 18 27.3 40.6 37.5 68.1H192.8zm187.8 48h77.8c3.6 15.4 5.6 31.5 5.6 48s-1.9 32.6-5.6 48H380.6c2.2-15.1 3.4-31.1 3.4-48s-1.2-32.9-3.4-48zm60-48H369.8c-13.4-43.5-34.5-77.9-54.9-103.5c54.6 16.1 99.8 54 125.6 103.5zm-298.4 0H71.4c25.8-49.6 71.1-87.4 125.6-103.5c-20.4 25.6-41.5 60-54.9 103.5zM314.9 455.5c20.4-25.6 41.5-60 54.9-103.5h70.7c-25.8 49.6-71.1 87.4-125.6 103.5zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu disabledKeys={["dutch", "french"]}>
          <DropdownItem key="english" value="english">English</DropdownItem>
          <DropdownItem key="dutch" value="dutch">Dutch</DropdownItem>
          <DropdownItem key="french" value="french">French</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button isIconOnly onPress={() => setDarkTheme(!darkTheme)} className="hidden md:flex bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6"><path fill="currentColor" d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
      </Button>
      <Button isIconOnly onPress={onOpen} className="md:hidden bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6"><path fill="currentColor" d="M256 0c17 0 33.6 1.7 49.8 4.8c7.9 1.5 21.8 6.1 29.4 20.1c2 3.7 3.6 7.6 4.6 11.8l9.3 38.5C350.5 81 360.3 86.7 366 85l38-11.2c4-1.2 8.1-1.8 12.2-1.9c16.1-.5 27 9.4 32.3 15.4c22.1 25.1 39.1 54.6 49.9 86.3c2.6 7.6 5.6 21.8-2.7 35.4c-2.2 3.6-4.9 7-8 10L459 246.3c-4.2 4-4.2 15.5 0 19.5l28.7 27.3c3.1 3 5.8 6.4 8 10c8.2 13.6 5.2 27.8 2.7 35.4c-10.8 31.7-27.8 61.1-49.9 86.3c-5.3 6-16.3 15.9-32.3 15.4c-4.1-.1-8.2-.8-12.2-1.9L366 427c-5.7-1.7-15.5 4-16.9 9.8l-9.3 38.5c-1 4.2-2.6 8.2-4.6 11.8c-7.7 14-21.6 18.5-29.4 20.1C289.6 510.3 273 512 256 512s-33.6-1.7-49.8-4.8c-7.9-1.5-21.8-6.1-29.4-20.1c-2-3.7-3.6-7.6-4.6-11.8l-9.3-38.5c-1.4-5.8-11.2-11.5-16.9-9.8l-38 11.2c-4 1.2-8.1 1.8-12.2 1.9c-16.1 .5-27-9.4-32.3-15.4c-22-25.1-39.1-54.6-49.9-86.3c-2.6-7.6-5.6-21.8 2.7-35.4c2.2-3.6 4.9-7 8-10L53 265.7c4.2-4 4.2-15.5 0-19.5L24.2 218.9c-3.1-3-5.8-6.4-8-10C8 195.3 11 181.1 13.6 173.6c10.8-31.7 27.8-61.1 49.9-86.3c5.3-6 16.3-15.9 32.3-15.4c4.1 .1 8.2 .8 12.2 1.9L146 85c5.7 1.7 15.5-4 16.9-9.8l9.3-38.5c1-4.2 2.6-8.2 4.6-11.8c7.7-14 21.6-18.5 29.4-20.1C222.4 1.7 239 0 256 0zM218.1 51.4l-8.5 35.1c-7.8 32.3-45.3 53.9-77.2 44.6L97.9 120.9c-16.5 19.3-29.5 41.7-38 65.7l26.2 24.9c24 22.8 24 66.2 0 89L59.9 325.4c8.5 24 21.5 46.4 38 65.7l34.6-10.2c31.8-9.4 69.4 12.3 77.2 44.6l8.5 35.1c24.6 4.5 51.3 4.5 75.9 0l8.5-35.1c7.8-32.3 45.3-53.9 77.2-44.6l34.6 10.2c16.5-19.3 29.5-41.7 38-65.7l-26.2-24.9c-24-22.8-24-66.2 0-89l26.2-24.9c-8.5-24-21.5-46.4-38-65.7l-34.6 10.2c-31.8 9.4-69.4-12.3-77.2-44.6l-8.5-35.1c-24.6-4.5-51.3-4.5-75.9 0zM208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"/></svg>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "md:hidden",
          backdrop: "md:hidden",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Settings</ModalHeader>
              <ModalBody>
                <Dropdown>
                  <DropdownTrigger>
                    <Button className="bg-blue-500 text-white dark:bg-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6"><path fill="currentColor" d="M197.1 455.5c-54.6-16.1-99.8-54-125.6-103.5h70.7c13.4 43.5 34.5 77.9 54.9 103.5zm33.2-35.5c-13.6-18-27.3-40.6-37.5-68.1H319.2c-10.2 27.4-23.8 50-37.5 68.1c-8.9 11.8-17.8 21.6-25.7 29.4c-7.9-7.8-16.8-17.6-25.7-29.4zM176 256c0-17.1 1.4-33 4-48H332c2.5 15 4 30.9 4 48s-1.4 33-4 48H180c-2.5-15-4-30.9-4-48zm-44.6-48c-2.2 15.1-3.4 31.1-3.4 48s1.2 32.9 3.4 48H53.6c-3.6-15.4-5.6-31.5-5.6-48s1.9-32.6 5.6-48h77.8zm61.4-48c10.2-27.4 23.8-50 37.5-68.1c8.9-11.8 17.8-21.6 25.7-29.4c7.9 7.8 16.8 17.6 25.7 29.4c13.6 18 27.3 40.6 37.5 68.1H192.8zm187.8 48h77.8c3.6 15.4 5.6 31.5 5.6 48s-1.9 32.6-5.6 48H380.6c2.2-15.1 3.4-31.1 3.4-48s-1.2-32.9-3.4-48zm60-48H369.8c-13.4-43.5-34.5-77.9-54.9-103.5c54.6 16.1 99.8 54 125.6 103.5zm-298.4 0H71.4c25.8-49.6 71.1-87.4 125.6-103.5c-20.4 25.6-41.5 60-54.9 103.5zM314.9 455.5c20.4-25.6 41.5-60 54.9-103.5h70.7c-25.8 49.6-71.1 87.4-125.6 103.5zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      <span className="font-semibold">Language</span>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu disabledKeys={["dutch", "french"]}>
                    <DropdownItem key="english" value="english">English</DropdownItem>
                    <DropdownItem key="dutch" value="dutch">Dutch</DropdownItem>
                    <DropdownItem key="french" value="french">French</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Button onPress={() => setDarkTheme(!darkTheme)} className="bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6"><path fill="currentColor" d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"/></svg>
                  <span className="font-semibold">{ darkTheme ? "Light theme" : "Dark theme"}</span>
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>Done</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
