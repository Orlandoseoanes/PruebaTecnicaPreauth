export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item>) {
        this.items = items;
    }

    // Actualizar la calidad de los ítems "Aged Brie"
    private updateAgedBrie(item: Item) {
        this.increaseQuality(item);
        item.sellIn--;
        if (item.sellIn < 0) {
            this.increaseQuality(item);
        }
    }

    // Actualizar la calidad de los ítems "Backstage passes"
    private updateBackstagePasses(item: Item) {
        if (item.sellIn <= 0) {
            item.quality = 0;
        } else if (item.sellIn <= 5) {
            this.increaseQuality(item, 3);
        } else if (item.sellIn <= 10) {
            this.increaseQuality(item, 2);
        } else {
            this.increaseQuality(item);
        }
        item.sellIn--;
    }

    // Actualizar la calidad de los ítems "Conjured"
    private updateConjuredItem(item: Item) {
        this.decreaseQuality(item, 2);
        item.sellIn--;
        if (item.sellIn < 0) {
            this.decreaseQuality(item, 2);
        }
    }

    // Actualizar la calidad de ítems normales
    private updateNormalItem(item: Item) {
        this.decreaseQuality(item);
        item.sellIn--;
        if (item.sellIn < 0) {
            this.decreaseQuality(item);
        }
    }

    // Incrementar la calidad de un ítem, asegurándose de que no supere 50
    private increaseQuality(item: Item, amount: number = 1) {
        item.quality = Math.min(50, item.quality + amount);
    }

    // Disminuir la calidad de un ítem, asegurándose de que no sea negativa
    private decreaseQuality(item: Item, amount: number = 1) {
        item.quality = Math.max(0, item.quality - amount);
    }

    // Método principal para actualizar la calidad de todos los ítems
    updateQuality() {
        for (const item of this.items) {
            switch (item.name) {
                case "Aged Brie":
                    this.updateAgedBrie(item);
                    break;
                case "Backstage passes to a TAFKAL80ETC concert":
                    this.updateBackstagePasses(item);
                    break;
                case "Sulfuras, Hand of Ragnaros":
                    // Los ítems "Sulfuras" no se actualizan
                    break;
                case "Conjured":
                    this.updateConjuredItem(item);
                    break;
                default:
                    this.updateNormalItem(item);
                    break;
            }
        }

        return this.items;
    }
}

const items = [
    new Item("Aged Brie", 2, 0),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Conjured", 3, 6),
    new Item("Normal Item", 5, 7),
];

const gildedRose = new GildedRose(items);
console.log("Before update:", gildedRose.items);
gildedRose.updateQuality();
console.log("After update:", gildedRose.items);
