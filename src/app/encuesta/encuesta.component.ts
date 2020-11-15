import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { element } from 'protractor';
import Swal from 'sweetalert2'
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  public PreguntaActiva: any = [{
    "pregunta_id": 1,
    "pregunta": "Coca-Cola preferida",
    "alternativas": [
      { "alternativa_id": 1, "alternativa_nombre": "Light", "pregunta_id": 1, "isChecked": false },
      { "alternativa_id": 2, "alternativa_nombre": "Sin azúcar", "pregunta_id": 1, "isChecked": false },
      { "alternativa_id": 3, "alternativa_nombre": "Normal", "pregunta_id": 1, "isChecked": false },
      { "alternativa_id": 4, "alternativa_nombre": "No tomo", "pregunta_id": 1, "isChecked": false }]
  }]
  
  public AlternativaSelected: number = 0;
  public RespuestaSelected: [] = [];
  public username: string = "";
  public ArrayRespuestas = [];


  constructor(public modalService: NgbModal,
    private globalServices: GlobalService,) { }

  ngOnInit(): void {
  }

  Modal(content) {
    this.GetData();
    this.modalService.open(content, { centered: true });

  }

  changeGender(e, item) {
    this.AlternativaSelected = item;
    this.PreguntaActiva[0].alternativas.filter(element =>
      element.isChecked = false
    )

    this.RespuestaSelected = this.PreguntaActiva[0].alternativas.filter(element => {
      return element.alternativa_id == item
    })


  }

  EnviarRespuesta(item) {
    console.log(this.username);
    if (this.username == "") {
      Swal.fire('Oops...', 'Debe Ingresar su correo', 'error')
      return;
    }

    if (this.AlternativaSelected == 0) {
      Swal.fire('Oops...', 'Debe seleccionar una alternativa', 'error')
      return;
    }

    let object = {"username":this.username, "alternativa_id": this.AlternativaSelected};
    this.globalServices.insertData(object).subscribe(
			result => {
        Swal.fire('Exito', 'Resultado ingresado correctamente', 'success')
      });
  }

  GetData(){
    this.globalServices.GetData().subscribe(
			result => {
        this.ArrayRespuestas = result;
      });
  }

}
