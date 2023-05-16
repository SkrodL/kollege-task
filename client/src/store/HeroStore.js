import {makeAutoObservable} from "mobx";

export default class HeroStore {
    constructor() {
        this._heroes = []
        this._page = 1
        this._totalCount = 0
        this._limit = 6
        makeAutoObservable(this)
    }

    setHeroes(heroes) {
        this._heroes = heroes
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setLimit(limit) {
        this._limit = limit
    }
    get heroes() {
        return this._heroes
    }
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
    }
}