<template>
<no-ssr>
    <div class="blog-card">
        <b-card
            overlay
            :img-src="blogImg"
            :img-alt="altImg"
            text-variant="white"
            @click="onBlogClick"
        >
            <!-- <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text> -->
            <h5 class="primary-color blog-card-heading" slot="footer">{{heading}}</h5>
        </b-card>
    </div>
</no-ssr>
</template>
<script>

export default {
    props: {
        heading: {
            type: String,
            required: true
        },
        blogImg: {
            type: String,
            required: true
        },
        altImg: {
            type: String,
        }
    },
    data() {
        return {
            imgHeight: '500px'
        }
    },
    methods: {
        onBlogClick() {
            this.$emit("touched");
        }
    }
}
</script>
<style scoped>
.blog-card {
    cursor: pointer;
    width: 500px;
    margin: 0 auto;
}
.blog-card > .card > img {
    height: 350px;
}
.blog-card:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.blog-card-heading {
    font-size: 22px;
    text-align: center;
    margin-top: 0.5rem;
}
</style>
