class ArtGallery {

    constructor(creator) {

        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = []; // has obj {articleModel, articleName, quantity }
        this.guests = []; // has {} { guestName: name, points: 500, purchaseArticle: 0 }
    }

    addArticle(articleModel, articleName, quantity) { // ('picture', 'Mona Liza', 3)
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);
        // let isValid = Object.keys(this.possibleArticles).find(x => x === articleModel);
        if (!this.possibleArticles[articleModel]) {
            // if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            // if (isValid) {
            throw new Error("This article model is not included in this gallery!")
        }
        let currentArticle = this.listOfArticles.find(x => x.articleModel === articleModel);
        if (currentArticle) {
            currentArticle.quantity += quantity;
        } else {
            let obj = {
                articleModel,
                articleName,
                quantity,
            }
            this.listOfArticles.push(obj);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) { // strings

        if (this.guests.some(p => p.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }

        if (personality === 'Vip') {
            this.guests.push({ guestName, points: 500, purchaseArticle: 0 })
        } else if (personality === 'Middle') {
            this.guests.push({ guestName, points: 250, purchaseArticle: 0 })
        } else {
            this.guests.push({ guestName, points: 50, purchaseArticle: 0 })

        }
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) { //('picture', 'Mona Liza', 'John')
        // let currentArticle = this.listOfArticles.find(x => x.articleModel === articleModel);
        // let currentArticleName = this.listOfArticles.find(x => x.articleName === articleName);
        let currentArticle = this.listOfArticles.find((x) => x.articleModel === articleModel && x.articleName === articleName)
        // if (!currentArticle && !currentArticleName) {
        //     throw new Error("This article is not found.");
        // }
        if (!currentArticle) {
            throw new Error("This article is not found.");
        }
        if (currentArticle.quantity === 0) {
            throw new Error("This article is not found.");
        }
        let guest = this.guests.find(x => x.guestName === guestName);
        if (!guest) {
            return "This guest is not invited.";
        }
        let price = Number(this.possibleArticles[articleModel]);

        if (guest.points < price) {
            return "You need to more points to purchase the article."
        } else {
            guest.points -= price;
            guest.purchaseArticle++;
            currentArticle.quantity--

        }
        return `${guestName} successfully purchased the article worth ${price} points.`
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria === 'article') {
            result.push('Articles information:')
            for (const newObj of this.listOfArticles) {
                let keys = Object.values(newObj)
                result.push(`${keys[0]} - ${keys[1]} - ${keys[2]}`)

            }

        } else if (criteria === 'guest') {
            result.push('Guests information:');
            for (const newObj of this.guests) {
                let [keys, points, purchItems] = Object.values(newObj)
                result.push(`${keys} - ${purchItems}`)

            }
        }
        return result.join('\n');
    }

}


console.log('----input 1---');
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.


console.log('----input 2---');

// const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
// You have successfully invited John!
// You have successfully invited Peter!
// John has already been invited.


console.log('----input 3---');
// const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
// John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points.
//  This article is not found.


console.log('----input 4---');

console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
// Articles information:
//  picture - Mona Liza - 3
//  item - Ancient vase - 1
//  Guests information:
//  John - 1
//  Peter - 1
