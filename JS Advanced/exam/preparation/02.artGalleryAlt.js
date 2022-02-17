class ArtGallery {

    constructor(creator) {

        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);
        let isValid = Object.keys(this.possibleArticles).find(x => x === articleModel);

        if (!isValid) {
            throw new Error(`This article model is not included in this gallery!`)
        }

        let qurrentArticle = this.listOfArticles.find((x) => x.articleModel === articleModel);

        if (qurrentArticle) {
            qurrentArticle.quantity += quantity
        } else {
            let obj = {
                articleModel,
                articleName,
                quantity
            }
            this.listOfArticles.push(obj)

        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {

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

    buyArticle(articleModel, articleName, guestName) {

        let currentArticle = this.listOfArticles.find((x) => {
            return x.articleModel === articleModel && x.articleName === articleName
        })
        if (!currentArticle) {
            throw new Error(`This article is not found.`)
        }
        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`
        }

        let guest = this.guests.find(x => x.guestName === guestName);

        if (!guest) {
            return `This guest is not invited.`
        }
        let price = this.possibleArticles[articleModel]
        //   ['picture']
        if (guest.points < price) {
            return `You need to more points to purchase the article.`

        } else {
            guest.points -= price;
            guest.purchaseArticle += 1
            currentArticle.quantity -= 1
        }
        return `${guestName} successfully purchased the article worth ${price} points.`
    }
    showGalleryInfo(criteria) {
        let result = []
        if (criteria === 'article'){
            result.push('Articles information:')
            for(let line of Object.values(this.listOfArticles)){
                result.push(`${line.articleModel} - ${line.articleName} - ${line.quantity}`)
            }
        } else if (criteria === 'guest'){
            result.push(`Guests information:`)
            for(let line of Object.values(this.guests)){
                result.push(`${line.guestName} - ${line.purchaseArticle}`)
            }
        }
        return result.join('\n')
    }
}

// console.log('----input 1---');
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
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
console.log('----input 3---');
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
// John successfully purchased the article worth 200 points.
//  Peter successfully purchased the article worth 250 points.
//  This article is not found.

// class ArtGallery {
//     constructor(creator) {
//         this.creator = creator;
//         this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
//         this.listOfArticles = [];
//         this.guests = [];
//     }

//     addArticle(articleModel, articleName, quantity) {

//         let articleModelLowerCase = articleModel.toLowerCase();

//         let quantityNumb = Number(quantity);
//         let isExist = false;

//         for (const key of Object.keys(this.possibleArticles)) {
//             if (key === articleModelLowerCase) {
//                 isExist = true;
//                 break;
//             }
//         }

//         if (!isExist) {
//             throw new Error("This article model is not included in this gallery!");
//         }

//         let obj = this.listOfArticles.find(o => o.articleName === articleName);

//         if (obj) {

//             obj.quantity += quantityNumb;

//         } else {

//             this.listOfArticles.push({ articleModel: articleModelLowerCase, articleName, quantity: quantityNumb });
//         }

//         return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
//     }

//     inviteGuest(guestName, personality) {
//         let obj = this.guests.find(o => o.guestName === guestName);

//         if (obj) {
//             return `${guestName} has already been invited.`;
//         }

//         if (personality === 'Vip') {

//             this.guests.push({ guestName, points: 500, purchaseArticle: 0 });

//         } else if (personality === 'Middle') {

//             this.guests.push({ guestName, points: 250, purchaseArticle: 0 });

//         } else {
//             this.guests.push({ guestName, points: 50, purchaseArticle: 0 });
//         }

//         return `You have successfully invited ${guestName}!`
//     }

//     buyArticle(articleModel, articleName, guestName) {

//         let isExist = false;

//         for (const key of Object.keys(this.possibleArticles)) {
//             if (key === articleModel) {
//                 isExist = true;
//                 break;
//             }
//         }

//         let article = this.listOfArticles.find(o => o.articleName === articleName && o.articleModel === articleModel);

//         if (!isExist || !article) {
//             throw new Error("This article is not found.");
//         }

//         if (article.quantity == 0) {
//             return `The ${articleName} is not available.`;
//         }

//         let guest = this.guests.find(o => o.guestName === guestName);

//         if (!guest) {

//             return `This guest is not invited.`;
//         }

//         let neededPoints = this.possibleArticles[articleModel];

//         if (guest.points - neededPoints < 0) {

//             return `You need to more points to purchase the article.`;

//         } else {
//             guest.points -= neededPoints;
//             guest.purchaseArticle += 1;
//             article.quantity -= 1;
//         }

//         return `${guestName} successfully purchased the article worth ${neededPoints} points.`

//     }

//     showGalleryInfo(criteria) {

//         let result = '';

//         if (criteria === 'article') {

//             result += 'Articles information:' + '\n';

//             for (const key of Object.values(this.listOfArticles)) {

//                 result += `${key.articleModel} - ${key.articleName} - ${key.quantity}` + '\n';
//             }
//         } else {
//             result += 'Guests information:' + '\n';

//             for (const key of Object.values(this.guests)) {
//                 result += `${key.guestName} - ${key.purchaseArticle}` + '\n';
//             }
//         }

//         return result.trim();
//     }
// }

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));