import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { SQLite,SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Disco } from '../class/disco';
import { Usuario } from '../class/usuario';
import { Genero } from '../class/genero';
import { Renta } from '../class/renta';
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  public database!:SQLiteObject;
  tblUsuarios:string = "CREATE TABLE IF NOT EXISTS usuario (idUsuario INTEGER PRIMARY KEY autoincrement,nombre VARCHAR(50)NOT NULL,email TEXT NOT NULL);"
  tblGeneros: string = "CREATE TABLE IF NOT EXISTS genero (idGenero INTEGER PRIMARY KEY autoincrement,nombre VARCHAR(20)NOT NULL);"
  tblDiscos: string  = "CREATE TABLE IF NOT EXISTS disco (idDisco INTEGER PRIMARY KEY autoincrement,nombre VARCHAR(30)NOT NULL,autor VARCHAR(50)NOT NULL,idGenero INTEGER NOT NULL,portada TEXT NOT NULL,FOREIGN KEY(idGenero) REFERENCES genero(idGenero);"
  tblRentas: string   = "CREATE TABLE IF NOT EXISTS renta (idRenta INTEGER PRIMARY KEY autoincrement,idUsuario INTEGER NOT NULL,idDisco INTEGER NOT NULL,fechainirenta DATE NOT NULL,fechaterrenta DATE NOT NULL, FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),FOREIGN KEY (idDisco)REFERENCES disco(idDisco);"
  constructor(private sqlite :SQLite, 
    private platform:Platform,
    public toastController:ToastController ) { 
    this.crearBD();
    }
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'musicandme.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD creada");
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    });
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tblGeneros, []);
      await this.database.executeSql(this.tblUsuarios, []);
      await this.database.executeSql(this.tblDiscos, []);
      await this.database.executeSql(this.tblRentas, []);
      this.presentToast("Tablas creadas");
    } catch (error) {
      this.presentToast("Error al crear tablas: " + error);
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }
}
