export class Quote {
    constructor(
        public price: number = null,
        public volume_24h: number = null,
        public market_cap: number = null,
        public percent_change_1h: number = null,
        public percent_change_24h: number = null,
        public percent_change_7d: number = null,
    ) { }
}

export class Currency {
    constructor(
        public id: number = null,
        public name: string = null,
        public symbol: string = null,
        public website_slug: string = null,
        public rank: number = null,
        public circulating_supply: number = null,
        public total_supply: number = null,
        public max_supply: number = null,
        public quotes: { 'USD': Quote } = null
    ) { }
}

export class AlertCurr {
    constructor(
        public currency: Currency = null,
        public max_price: number = 0,
        public min_price: number = 0
    ) { }
}