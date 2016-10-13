Vue.filter('ago', ago)

Vue.transition('fadeIn', {
    stagger: function (index) {
        return Math.min(300, index * 50)
    }
})

new Vue({
    el: "#twitty",
    data: {
        tweets: [],
        resource_url: 'http://localhost:3000/tweets?q=vuejs&count=10',
        loading: true
    },
    methods: {
        onScroll: function(event) {
            var wrapper = event.target,
                list = wrapper.firstElementChild

            var scrollTop = wrapper.scrollTop,
                wrapperHeight = wrapper.offsetHeight,
                listHeight = list.offsetHeight,
                diffHeight = listHeight - wrapperHeight

            console.log(scrollTop)

            if(diffHeight <= scrollTop && !this.loading) {
                console.log('load')
                this.loadMore()
            }
        },
        fetchData: function() {
            this.$http.get(this.resource_url).then(function(response) {                        
                var json = response.data
                var tweets = json.data
                                
                // tweets.forEach(function(tweet) {
                //     this.tweets.push(tweet)
                // }.bind(this))
                // 
                this.tweets = this.tweets.concat(tweets)

                this.resource_url = json.next_page_url
                this.loading = false

            }, function(error) {
                console.log(error)
                this.loading = false
            })
        },
        loadMore: function() {
            this.loading = true
            this.fetchData()
        }
    },
    created: function() {
        this.fetchData()
    }
})