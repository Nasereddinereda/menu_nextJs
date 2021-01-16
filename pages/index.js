import React, { useState } from "react"
import Head from 'next/head'
import SubMenu from '../src/components/layout/SubMenu'
import Link from 'next/link';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react"


import { IoLogIn } from 'react-icons/io5';
import { DiDatabase } from 'react-icons/di';




const submenus = [
  {
    category: "Generally",
    items: [
      {
        title: "Gender Equality",
        icon: "Messenger",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          },
          {
            title: "In Cases of Rape",
            target: "/"
          }
        ]
      },
      {
        title: "Gender Equality",
        icon: "Messenger",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          },
          {
            title: "In Cases of Rape",
            target: "/"
          }
        ]
      },
      {
        title: "Gay Rights",
        icon: "News",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          },
          {
            title: "In Cases of Rape",
            target: "/"
          }
        ]
      },
      {
        title: "Political Interests",
        icon: "Thumb",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          }
        ]
      },
    ]
  },
  {
    category: "Extra",
    items: [
      {
        title: "Gender Equality",
        icon: "Time",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          },
          {
            title: "In Cases of Rape",
            target: "/"
          }
        ]
      },
      {
        title: "Gay Rights",
        icon: "Thumb",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          },
          {
            title: "In Cases of Rape",
            target: "/"
          }
        ]
      },
    ]
  },
  {
    category: "New",
    items: [
      {
        title: "Gender Equality",
        icon: "Time",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          },
          {
            title: "In Cases of Rape",
            target: "/"
          }
        ]
      },
      {
        title: "Gay Rights",
        icon: "Thumb",
        sub: [
          {
            title: "People Try To Be Fair",
            target: "/"
          },
          {
            title: "For Any Reaon",
            target: "/"
          },
          {
            title: "In Cases of Rape",
            target: "/"
          }
        ]
      },
    ]
  },
];




const Home = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [auth, setAuth] = useState(false);


  const onLogout = () => {
    console.log("logout");
  }

  return (
    <div >
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex justify-end m-5">
        <Button ref={btnRef} colorScheme="teal" onClick={() => setAuth(!auth)}>
          {auth ? "logout" : "signin"}
        </Button>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen} className="ml-4">
          Open
        </Button>
      </div>


      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay >
          <DrawerContent >
            <DrawerCloseButton />

            <DrawerHeader className="css-cl-white br-bottom css-none-line" > PRO SIDEBAR </DrawerHeader>

            {
              auth ?
                <div className="flex ml-7p mt-5">
                  <img className="user-img" alt="complex" src="photos/user.png" />
                  <div className="ml-4 css-cl-white">
                    <p className="ft-wg-300 sp-lt-2"> <span className="css-cl-white255"> Muss </span> <span className="ft-wg-700"> lounici </span>  </p>
                    <p className="css-cl-grey"> Administrator </p>
                    <div className="flex css-none-line mt-2 "> <div className="online"> </div> Online </div>
                  </div>
                </div> : ""
            }

            <Link href="/#">
              <Button rightIcon={<DiDatabase />} colorScheme="blue" variant="outline" className="outile-none flex justify-between w-86 ml-7p mt-5 ">
                General Socia Survey
              </Button>
            </Link>

            {
              !auth ?
                <Link href="/#">
                  <Button rightIcon={<IoLogIn />} colorScheme="blue" variant="solid" className="outile-none flex justify-between w-86 ml-7p mt-5 css-bg-success" >
                    Login
                  </Button>
                </Link> :
                <Button rightIcon={<IoLogIn />} colorScheme="blue" variant="solid" className="outile-none flex justify-between w-86 ml-7p mt-5 css-bg-danger" onClick={() => onLogout()} >
                  Logout
                </Button>
            }


            <div className="separation" > </div>

            <DrawerBody className="w-100">
              {
                submenus.map(elm => <SubMenu key={elm.category} data={elm} />)
              }
            </DrawerBody>


          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

    </div>
  )
}


export default Home;



