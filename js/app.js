var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        srcAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tabtab', 'T-bone', 'Mr. T','Tabitha Tab Tabby Catty Cat']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        srcAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: ['Tigger']
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        srcAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: ['Casper']
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        srcAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ["Shooby"]
    },
    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        srcAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames: ["Zzzzz"]
    }
];


var Cat = function (cat) {
    this.clickCount = ko.observable(cat.clickCount);
    this.name = ko.observable(cat.name);
    this.imgSrc = ko.observable(cat.imgSrc);
    this.srcAttribution = ko.observable(cat.srcAttribution);
    this.nicknames = ko.observableArray(cat.nicknames);

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
};

var ViewModel = function () {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(aCat) {
        self.catList.push(new Cat(aCat));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCurrentCat = function(aCat){
        self.currentCat = aCat;
    }

};

ko.applyBindings(new ViewModel());