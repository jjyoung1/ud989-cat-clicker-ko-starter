var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
    // this.imgAttribution("https://www.flickr.com");
    this.nicknames = ko.observableArray([
        'Tabtab', 'T-bone', 'Mr. T',
        'Tabitha Tab Tabby Catty Cat']);

    this.catLevel = ko.computed(function () {
        var cnt = this.clickCount();
        if (cnt < 2) {
            return ("newborn");
        } else if (cnt < 4) {
            return ("adolescent");
        } else {
            return ("mature");
        }
    }, this);

}

var ViewModel = function () {

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };


};

ko.applyBindings(new ViewModel());