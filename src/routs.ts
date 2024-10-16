export const publicRoutes = [
    { id: 0, path: '/', name: 'Главная' },
    { id: 1, path: '/about', name: 'О проекте' },
    { id: 2, path: '/contacts', name: 'Контакты' },
];

export const transitionRoutes = [
    { path: '/', name: 'MAUverse' },
    { path: '/about', name: 'О проекте' },
    { path: '/contacts', name: 'Контакты' },
    { path: '/news', name: 'Новости' },
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
