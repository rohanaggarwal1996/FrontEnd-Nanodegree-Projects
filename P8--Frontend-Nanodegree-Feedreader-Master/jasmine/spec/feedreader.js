$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it("URL is defined in it", function() {
            for (var k = 0; k < allFeeds.length; k++) {
                expect(allFeeds[k].url).toBeDefined();
                expect(allFeeds[k].url.length===0).not.toBe(true);
            }
        });

        it("Name is described int it", function() {
            for (var j = 0; j < allFeeds.length; j++) {
                expect(allFeeds[j].name).toBeDefined();
                expect(allFeeds[j].name.length===0).not.toBe(0);
            }
        });
    });
    describe("Menu is described in it", function() {
        it('Not Visible Or hidden', function() {
            expect($('body').hasClass('menu-hidden')).not.toBe(false);
        });

        it('Menu check', function() {
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(false);
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).not.toBe(false);
        });
    });
    describe('The Initial Entries In IT', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('the link has one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection in it', function() {
        var beg, end;
        beforeEach(function(done) {
            loadFeed(0, function() {
                beg = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    end = $('.feed').html();
                    done();
                });
            });
        });
        it('change in content', function() {
            expect(end).not.toBe(beg);
        });
    });

}());
