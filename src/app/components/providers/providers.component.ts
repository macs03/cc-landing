import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: "app-providers",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.scss"]
})
export class ProvidersComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  codigo = "#Providers-VIP";
  code: string = "";

  constructor(private router: Router, public snackBar: MdSnackBar) {
    this.router = router;
    this, (snackBar = snackBar);
  }

  ngOnInit() {
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -2,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      "background-color": "#171300"
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

  compareCode() {
    if (this.code === this.codigo) {
      this.router.navigate(["/providers-landing"]);
    } else {
      this.snackBar.open("Codigo erroneo intenta de nuevo", "Cerrar", {
        duration: 2000
      });
    }
  }
}
