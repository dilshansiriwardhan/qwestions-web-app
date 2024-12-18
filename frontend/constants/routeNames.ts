export const mainRoutes = [
    {name: 'Overview' , route: '/overview'},
    {name: 'Create Test' , route: '/create-test'},
    {name: 'Analysis' , route: '/analysis'},
    {name: 'Students' , route: '/students'},
    {name: 'Join a Test' , route: '/join'},
    {name: 'Last Tests' , route: '/last-tests'},
];

export const steps = [
    { name: 'Instruction Page', route: '/create-test/create/instructions' , progress:5},
    { name: 'Questions Manager', route: '/create-test/create/question-manager' , progress:10},
    { name: 'Access Settings', route: '/create-test/create/access-settings' , progress:50},
    { name: 'Grading', route: '/create-test/create/grading' , progress:60},
    { name: 'Time Allocation', route: '/create-test/create/time-allocation' , progress:80},
    { name: 'Preview', route: '/create-test/create/preview' , progress:100},
  ];
  
