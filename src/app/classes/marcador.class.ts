export class Marcador {

    public lat: number;
    public lng: number;
    public titulo = 'Sin titulo';
    public desc = 'Sin Descripcion';
    
    constructor( lat: number,lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}