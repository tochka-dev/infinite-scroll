new Vue({
    el: "#tweety",
    data: {
        tweets: [],
        resource_url: 'http://localhost:3000/tweets?q=vuejs&count=10',
        loading: false
    },
    methods: {
        onScroll: function(event) {
            var wrapper = event.target,
                list = wrapper.firstElementChild

            var scrollTop = wrapper.scrollTop,
                wrapperHeight = wrapper.offsetHeight,
                listHeight = list.offsetHeight

            var diffHeight = listHeight - wrapperHeight

            if(diffHeight <= scrollTop && !this.loading) {
                this.load()
            }
        },
        load: function() {
            this.loading = true
            this.$http.get(this.resource_url).then(function(response) {
                
                var json = JSON.parse(response.data),
                    tweets = json.data

                this.tweets = this.tweets.concat(tweets)
                this.resource_url = json.next_page_url
                this.loading = false

            }, function(error) {
                console.log(error)
                this.loading = false
            })
        }
    },
    created: function() {
        this.load()
    }
})