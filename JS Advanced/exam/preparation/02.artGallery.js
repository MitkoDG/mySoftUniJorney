class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
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
            this.listOfArticles.push(obj)
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {

        if (!this.guests.some(p => p.guestName === guestName)) {
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

    // buyArticle ( articleModel, articleName, guestName){



    // }


}

console.log('----input 1---');
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// Successfully added article Mona Liza with a new quantity- 3.
//   Successfully added article Ancient vase with a new quantity- 2.
//   Successfully added article Mona Liza with a new quantity- 1.


// console.log('----input 2---');

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
// You have successfully invited John!
// You have successfully invited Peter!
// John has already been invited.

