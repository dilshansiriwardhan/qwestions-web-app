import {
    ChartPieIcon , 
    PencilSquareIcon,
    ChartBarIcon,
    UserGroupIcon,
    DocumentTextIcon,
    PuzzlePieceIcon
} from '@heroicons/react/24/outline';


export const linkList = [
    {name: 'Overview' , href: '/overview' , icon:ChartPieIcon},
    {name: 'Create Test' , href: '/create-test' , icon:PencilSquareIcon},
    {name: 'Analysis' , href: '/analysis' , icon:ChartBarIcon},
    {name: 'Students' , href: '/students' , icon:UserGroupIcon},
    {name: 'Join a Test' , href: '/join', icon:PuzzlePieceIcon},
    {name: 'Last Tests' , href: '/last-tests', icon:DocumentTextIcon},
];

export const mentorLinks = [
    {name: 'Overview' , href: '/overview' , icon:ChartPieIcon},
    {name: 'Create Test' , href: '/create-test' , icon:PencilSquareIcon},
    {name: 'Analysis' , href: '/analysis' , icon:ChartBarIcon},
    {name: 'Students' , href: '/students' , icon:UserGroupIcon},
];

export const studentLinks = [
    {name: 'Join a Test' , href: '/join', icon:PuzzlePieceIcon},
    {name: 'Last Tests' , href: '/last-tests', icon:DocumentTextIcon},
];
