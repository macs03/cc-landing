import { Component, OnInit, Inject } from "@angular/core";
import { MdDialog, MD_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  constructor(public dialog: MdDialog) {
    this.dialog = dialog;
  }

  ngOnInit() {
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 100
        },
        color: {
          value: "#9b8001"
        },
        shape: {
          type: "polygon"
        }
      }
    };
  }

  openDialog(convenio) {
    let data = null;
    switch (convenio) {
      case "salud":
        data = {
          title: "Salud",
          beneficios: [
            "Farmacias",
            "Emi",
            "Asistencia medica telefónica gratuita Medico a domicilio las 24 horas Ambulancia a domicilio"
          ]
        };
        break;
      case "educacion":
        data = {
          title: "Educación",
          beneficios: [
            "Kuepa",
            "Cun",
            "Meicol ( escuela de estética)",
            "Escuelas de belleza"
          ]
        };
        break;
      case "estilo":
        data = {
          title: "Estilo de vida",
          beneficios: [
            "FitPal ( cadena de mas de 170 GYM)",
            "TecFit ( 11 Gym en Bogota) Clínicas Estéticas",
            "Body Bryte mas de 7 clinicas steticas y spas",
            "Salones de Belleza"
          ]
        };
        break;
      case "recreacion":
        data = {
          title: "Recreación",
          beneficios: [
            "Charly aventura Tobia (deportes extremos)",
            "Rapel, Rafting, Canotaje, Paintball",
            "Minas de Sal Nemocon",
            "Carts Multi parque ",
            "Paint ball  Colombian Paint ball"
          ]
        };
        break;
      case "asistencia1":
        data = {
          title: "Asistencia al vehiculo",
          beneficios: ["Carro Taller ", "Conductor Elegido ", "Grúa"]
        };
        break;
      case "asistencia2":
        data = {
          title: "Asistencia al hogar",
          beneficios: ["Plomería", "Cerrajería", "Electricidad", "Vidriería"]
        };
        break;

      default:
        break;
    }
    this.dialog.open(ConveniosDialog, {
      data: data
    });
  }
}

@Component({
  selector: "dialog-data-example-dialog",
  templateUrl: "dialog-data-example-dialog.html",
  styleUrls: ["./landing.component.scss"]
})
export class ConveniosDialog {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
}
