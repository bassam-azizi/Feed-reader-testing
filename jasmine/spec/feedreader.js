/* feedreader.js
 *
 * This is the spec file that Jasmine will read, to test all of the features inside this application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
        it('All feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        for (feed of allFeeds){
            it('feed has a URL', function(){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        }


        /* This test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        for (feed of allFeeds){
            it("feed has a name", function(){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        }
    });


    /* This test suite named "The menu" */
    describe("The menu", function(){

        /* This test that the menu element is
         * hidden by default.
         */
        it("The menu element , is hidden by default", function(){
            expect($('body').hasClass("menu-hidden")).toBe(true);

        })

         /* This test that the menu changes
          * visibility when the menu icon is clicked.
          */
         it("Menu change visibility, when the menu icon is clicked", function(){
            const menuIcon = $(".menu-icon-link"); 

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         })
    
    });

    /* This test suite named "Initial Entries" */
        describe("Initial Entries", function(){

            /* This test that there's at least one .entry element within the .feed container just after the loadFeed
         * function completes its work, 
         */
        beforeEach(function(done){
            loadFeed(0,done);
        });
        it("There is at least a single .entry element within the .feed container, when the loadFeed function is called", function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        })

        
    })
    /* This test suite named "New Feed Selection" */
    describe("New Feed Selection", function(){
        /* This test that the feed content actually change when a new feed
         is loaded.*/

       
       let feedContent;
       let updatedFeedContent;
       
       beforeEach(function(done){
            loadFeed(0,function(){
                feedContent = document.querySelector('#title').innerText;
                loadFeed(1,function(){
                    updatedFeedContent = document.querySelector('#title').innerText;
                    done();
                });
            });
        })
        
        
        it("The content changes when a new feed is loaded", function(){
            console.log(feedContent);
            console.log(updatedFeedContent);
            expect(updatedFeedContent === feedContent).toBe(false);
        })
       
    });
}());
