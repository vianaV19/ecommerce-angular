export class Filter{
    tipo:string = 'byName' || 'byPrice'
    byName?:string
    byPrice?:Array<number>
}