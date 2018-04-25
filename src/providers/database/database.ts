import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import {Platform} from "ionic-angular";
import {SQLitePorter} from "@ionic-native/sqlite-porter";
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }

  fillDatabase() {


    // this.http.get('assets/dummyDump.sql')
    //   .map(res => res.text())
    //   .subscribe(sql => {
    //     this.sqlitePorter.importSqlToDb(this.database, sql)
    //       .then(data => {
    //         this.databaseReady.next(true);
    //         this.storage.set('database_filled', true);
    //       })
    //       .catch(e => console.error(e));
    //   });


    // this.sqlitePorter.importJsonToDb(this.database, json, {
    //   successFn: successFn,
    //   errorFn: errorFn,
    //   progressFn: progressFn,
    //   batchInsertSize: 500
    // });

    this.http.get('assets/dummyDump.json')
      .map(res => res.text())
      .subscribe(json => {
        this.sqlitePorter.importJsonToDb(this.database, json)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }

  addDeveloper(name, skill, years) {
    let data = [name, skill, years]
    return this.database.executeSql("INSERT INTO developer (name, skill, yearsOfExperience) VALUES (?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getAllDevelopers() {
    return this.database.executeSql("SELECT * FROM Schedule", []).then((data) => {
      let developers = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          developers.push({ id: data.rows.item(i).id, time: data.rows.item(i).time, item: data.rows.item(i).item });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

}
