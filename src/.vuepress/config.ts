
import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    title: "FluxPHP",
    description: "A PHP MVC Framework",

    plugins: [
        searchProPlugin({})
    ],
    theme: hopeTheme({
        navbar: [],
        sidebar: [
            {
                text: "Introduction",
                children: [
                    { text: "Getting Started", link: "/getting-started" },
                    { text: "Routing", link: "/routing" },
                    { text: "View", link: "/view" },
                    { text: "Database", link: "/database" },
                    { text: "Model", link: "/model" },
                ]
            }
        ],
        author: {
            name: "Hansen",
            email: "hansenkhyx@gmail.com",
            url: "https://github.com/hansenkhi"
        }
    }),
});