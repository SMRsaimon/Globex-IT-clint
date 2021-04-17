import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BiGridAlt } from 'react-icons/bi';
import { BsPersonLinesFill } from 'react-icons/bs';
import { GrServices } from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Services',
    path: '/services',
    icon: <GrServices />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <BsPersonLinesFill />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: "DeshBoard",
    path: '/deshboard',
    icon: <BiGridAlt />,
    cName: 'nav-text'
  },

];
