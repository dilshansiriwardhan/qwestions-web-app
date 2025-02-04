export const mainRoutes = [
    {name: 'Overview' , route: '/overview'},
    {name: 'Create Test' , route: '/create-test'},
    {name: 'Analysis' , route: '/analysis'},
    {name: 'Students' , route: '/students'},
    {name: 'Join a Test' , route: '/join'},
    {name: 'Last Tests' , route: '/last-tests'},
];

export const steps = [
    { name: 'Configure', route: '/create-test/create/configure' , progress:20},
    { name: 'Questions Manager', route: '/create-test/create/question-manager' , progress:50},
    { name: 'Preview', route: '/create-test/create/preview' , progress:80},
    { name: 'Publish', route: '/create-test/create/publish' , progress:100},
  ];
  
