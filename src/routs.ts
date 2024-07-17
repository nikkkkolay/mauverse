export const publicRoutes = [
    { id: 0, path: '/', name: 'Home' },
    { id: 1, path: '/about', name: 'About' },
    { id: 2, path: '/contacts', name: 'Contacts' },
];

export const transitionRoutes = [
    { path: '/', name: 'Main' },
    { path: '/about', name: 'About' },
    { path: '/contacts', name: 'Contacts' },
    { path: '/news', name: 'News' },
    { path: '/404', name: '404' },
];

export const transitionPathname = (pathname: string, routs: { path: string; name: string }[]) => {
    let name = {};

    routs.forEach(rout => {
        if (pathname.includes(rout.path)) {
            name = rout;
        }
    });

    return name;
};
