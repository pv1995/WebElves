<template>
    <div>
        <Banner
            :bannerText="bannerHeading"
            :bannerSubText="bannerSubHeading"
            :altBG="background"
            :homepage="homePage"
            :imageURL="image"
            :bannerBackground="bannerBackground"
        />
        <section class="blog-page">
            <div class="row">
                <div class="col-sm-12 col-md-6 blog-wrapper" v-for="blog in blogs" :key="blog.id">
                    <BlogCard :heading="blog.heading"  @touched="goToSingleBlog(blog.route)" :blogImg="blog.img"/>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Banner from "~/components/banner.vue";
import BlogCard from "~/components/blog-card.vue";

export default {
    components: {
        Banner,
        BlogCard
    },
    head () {
        return {
        title: 'Blogs | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier website development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'web application development company, Mobile App Development Agency, hybrid mobile app development company, UI/UX Design Agency, graphic design services, graphic design agency, hire designers, hire developers, web application development company, mobile app development company, digital marketing company.' },
        ]
        }
    }, 
    data() {
        return {
            tabIndex: 0,
            homePage: false,
            background: "banner-alternate",
            bannerHeading: `Insights`,
            bannerSubHeading: "Our take on the latest tech & design trends in the industry",
            image: "/images/banner2.jpeg",
            bannerBackground: true,
            blogs: [
                {
                    id: 1,
                    heading: 'The WebElves Development Process',
                    img: '/images/blog1.jpeg',
                    author: 'Dhruv Mishra',
                    authorImg: '',
                    route: 'our-development-process',
                    altImg: 'Product Development Company'
                },
                {
                    id: 2,
                    heading: 'Top 7 UI/UX Design Trends in 2019',
                    img: '/images/blog2.jpeg',
                    author: 'Ishita Dey',
                    authorImg: '',
                    route: 'top-uiux-design-trends',
                    altImg: 'UI/UX Design Company'
                },
                {
                    id: 3,
                    heading: 'Top 10 [Must Have] Features of an E-Commerce Application',
                    img: '/images/blog3.jpeg',
                    author: 'Shubham Prasanna',
                    authorImg: '',
                    route: 'top-10-must-have-features-of-an-ecommerce-app',
                    altImg: 'E-commerce Development Company'
                },
                {
                    id: 4,
                    heading: 'Why Companies should choose VueJS for Application Development',
                    img: '/images/blog4.jpeg',
                    author: 'Shubham Prasanna',
                    authorImg: '',
                    route: 'why-choose-vuejs-for-development',
                    altImg: 'VueJS Development Company'
                },
                {
                    id: 5,
                    heading: 'Top 5 Trends to include in your Healthcare App',
                    img: '/images/blog5.jpeg',
                    author: 'Ishita Dey',
                    authorImg: '',
                    route: 'top-5-trends-to-include-in-your-healthcare-app',
                    altImg: 'Web Development Agency'
                },
                // {
                //     id: 6,
                //     heading: 'Top mobile app development trends that will dominate 2019',
                //     img: '',
                //     author: 'Shubham Prasanna',
                //     authorImg: ''
                // }
            ]
        }
    },
    methods: {
        goToSingleBlog(route) {
            this.$router.push(route);
        }
    }
}
</script>
<style scoped>
.blog-page {
    padding: 5rem 10rem;
}
.blog-wrapper {
        margin: 1rem 0 !important;
}
</style>
