export default [
    {
        path: "discuss" ,
        name: "discuss",
        component: () => import("../components/community/Discuss.vue")
    },
    {
        path: "down" ,
        name: "down",
        component: () => import("../components/community/Down.vue")
    }
]