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